---
title: "Docker Hates Me"
date: "2021-03-23"
language: "en"
published: true
tags: ["Raspberry Pi", "Kubernetes", "MicroK8s", "Python"]
description: "This is the third post on my endeavour to learn about Kubernetes on my Raspberry Pi cluster. In this blog I describe hot to deploy a simple echo server to the Kubernetes cluster and how to scale this server. For reasons that will shortly become clearer this blog is called: Docker Hates Me."
---

In this blog I described what I learned when trying to replicate the examples from the third 
chapter of the [Kubernetes in Action](https://www.manning.com/books/kubernetes-in-action) by 
[Marko Luksa](https://twitter.com/markoluksa). 

![Kubernetes in Action Cover](./book.jpg)

Unfortunately, I rarely stick to tutorials or descriptions in books. Most of the time I try to 
extend the examples just a little. This usually leads me down the next rabbit hole. And after 
lengthy debugging session and lots of searching on the internet is usually haven't exactly achieved 
what I wanted but also learned lots of stuff along the way. This is exactly what happen in this case 😉!

## Python Echo Server

In order to have a little application to deploy to my Kubernetes cluster I decided to implement an echo server. 
But in contrast to the echo server described in the Kubernetes in Action book I wanted to use Python 🐍 and 
[FastAPI](https://fastapi.tiangolo.com/) to implement the echo server. 

Implementing an echo server is straight forward with FastAPI. The following snippet shows my implementation. 
The code is also available on [Github](https://github.com/ceedee666/py-echo-server/blob/main/main.py).


```python {numberLines}
import uvicorn
import socket

from fastapi import FastAPI, Request

app = FastAPI()

@app.get("/")
async def root(request: Request):
  return {
    "client": request.client.host,
    "host": socket.gethostname(),
    "message": "Hello World from Python!"
  }

if __name__ == "__main__":
  uvicorn.run(app, host="0.0.0.0", port=8000)
```

The echo server can be run locally by executing `python main.py`. Once the server is running 
sending an HTTP Get request to it will return a simple JSON object containing client IP,
the host name and a message (cf. lines 11 - 13 in the code snippet).
Below is the output of running `curl -s localhost:8000 | jq` on my laptop.
Note that I use the `-s` option to suppress progress output. Furthermore, the result is formatted 
for better readability using [jq](https://stedolan.github.io/jq/).

```json
{
  "client": "127.0.0.1",
  "host": "Christians-MBP-2.local",
  "message": "Hello World"    
}
```


## Comparison between Virtual Machines and Containers

Before I continue with the explanation of how to deploy the echo server to Kubernetes it is important
to understand what containers are and how they differ from virtual machines. The following figure <sup id="a1">[1](#f1)</sup>
shows a comparison of running applications in virtual machines and containers.

![VMs vs. Containers](./containers.png)

Virtual machines as well as containers
are technologies for [virtualisation](https://en.wikipedia.org/wiki/Virtualization). The goal of both technologies is to provide 
an isolated environment to run applications. In the case of virtual machines hardware virtualisation is used to achieve this. The host 
machine executes multiple virtual machines. Each virtual machine contains its own operating system. Furthermore, each 
virtual machine contains the necessary libraries as well as the applications. This is shown on the left side of the figure. 

In contrast to that, containers rely on special features of the host operating system for the creation of isolates environments
(e.g. [cgroups](https://en.wikipedia.org/wiki/Cgroups) in Linux). As shown on the right side of the figure,
containers do not contain a guest operating system. 
Containers only contain the necessary libraries and the application. As a result containers have a smaller 
runtime overhead and are much smaller than comparable virtual machines.

[Docker](https://www.docker.com/) is a well known software for the creation of containers. Kubernetes was especially develop as a system 
> for automating deployment, scaling, and management of containerized applications.

## Creating a Docker Image

The next step in order to deploy the echo server to my cluster is to create a [Docker](https://www.docker.com/) image. 
Docker images are created using a `Dockerfile`. This file specifies:

- The base image on which the new image will be based 
- What libraries need to be installed
- Which command is executed in order to run the application inside the container.

The following listing shows the contents of the `Dockerfile` I created for the Python echo server. 

```dockerfile {numberLines}
# Pull base image
FROM python:3.8

# Copy files
COPY *.py Pipfile* /

# Install dependencies
RUN pip install pipenv
RUN pipenv install --system --dev

# Run server
EXPOSE 8000
CMD ["python", "main.py"]
```

Line 2 specifies the [python](https://hub.docker.com/_/python) as the base image. Furthermore, the tag `3.8` details the version of the python image to use.
Next, line 5 specifies that all `*.py` files and all files starting with `Pipfile*` should be copied to the root directory of the container. 
Lines 8 and 9 are responsible foe installing the necessary Python libraries using the `pipenv` tool. Finally, line 12 exposes port 8000 of the container and 
line 13 starts the echo server by executing `python main.py`.

### Building the Docker Container

Based on the `Dockerfile` the container is created using the docker CLI. 

```zsh
docker build -t ceedee666/py-echo-server .
```

This command:

- Builds a docker image using the `Dockerfile` in the current directory 
- Names the image with `ceedee666/py-echo-server`.

In the image name `ceedee666` is my [Docker Hub](https://hub.docker.com) username. Adding the username to the name of the image is required in order to be
able to push the image to Docker Hub. Once the image is build, it can be used to crate a container and run it.

```zsh
docker run --name py-echo-container -p 1234:8000 -d ceedee666/py-echo-server
```

The command above consist of three main parts:

1. It creates and runs a  container named `py-echo-server`
2. The container is based on the image `ceedee666/py-echo-server`
3. Maps the port `1234` of the host to the port `8000` of the container.

After the container is running it is now possible to test the echo server running inside the container using e.g.
`curl -s localhost:1234 | jq`.

### Pushing the Image to Docker Hub

The final step is to push the Docker image to the Docker Hub. This enables Kubernetes in the next step to use this 
image and deploy it to the Raspberry Pi cluster. Pushing an image can be done using the following command:

```zsh
docker push ceedee666/py-echo-server
```

## First Rabbit Hole - exec format error



## References
<b id="f1">[1]</b> The figure is based on M. Lukša, Kubernetes in action. Shelter Island, NY: Manning Publications Co, 2018. [↩](#a1)

