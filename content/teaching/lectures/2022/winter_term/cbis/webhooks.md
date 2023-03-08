---
title: "Webhooks"
language: "en"
published: true
tags: ["FH Aachen", "Teaching", "Cloud", "Microsoft", "Web", "Webhooks"]
---

## Data on the Internet

How does one transmit data on the Internet? A simple Question, but there is no single
easy solution.
Historically there was one dominant architecture online. Big monolithic servers serving
data to multiple clients. Clients would send requests to those servers; The server
would send an answer and then the Transaction is complete. For the client to get
updated Information, clients would have to send a new Request. Nowadays it’s a lot
more fluid. Often there are multiple Servers that interact with each other. Examples
are

- Multiple servers sharing an authentication server
- A self-service system interacting with multiple other services
- Complicated Business Processes involving the creation of user accounts on multiple other services
- Ticket Systems that trigger notifications on communication services (for example Teams)

## Polling

Polling is the process where clients continuously ask a server for updates.
This works great for systems that only occasionally require updates or are entirely
user driven. systems like these are often described as “polling”. In polling, a client
would repeatedly make requests to a server to check for updates or new data. The
server would respond with either the requested data or a message indicating that
there was no new data.

Imagine a client wants to know very quickly if information changes, but that information
doesn’t change very often. With polling the client needs to continuously check for
updates (maybe every 10 seconds) and send a request for every single check. This
requires unnecessary bandwidth and processing power.

## Webhooks

The solution to that problem could be "Webhooks". To use webhooks, a client gives
a server a URL to send data to if there is an update. Usually this is done with HTTP
Post Requests so that more data can be included in the body. A request for a webhook
looks just like usual web requests, but with a clearly defined structure. The data
in the body is usually sent encoded via JSON, but XML is also popular. Now the client
"just" needs to host their own webserver to catch the requests and process the information.

## Our Task

During our project for Cloud-Based Information Systems 2022/2023 with the FEV we
encountered a use case that required us to interface with the service management
platform "4me". In particular their ticket system. When a ticket was opened by a
specific user and with a specific subject, we wanted to extract information from
that ticket. This only happens whenever a new employee joins the company. So usually,
it doesn’t even happen daily. However, whenever it does happen, it should happen
relatively quickly so the new employee doesn’t have to wait.

4me has multiple APIs to get information such as the sender, subject and body. One
option is the https://developer.4me.com/v1/requests/ API which allows clients to
query information about all open requests, filter them and modify them. This is great,
but it would require us to list all open requests frequently. This is unnecessary
work because 4me also offers something called “Automation Rules” which can send data
to webhooks. https://developer.4me.com/v1/webhooks/ This allowed us to do most of
the filtering via 4me automation rules and then just send the body to our code.

##Why Webhooks are difficult
Now if webhooks are so great, why aren’t they used all the time for almost everything?
It requires the server to send data to a client webserver. This means that the client
needs to be accessible from the internet. This limits the use case for webhooks.
An obvious example for something that wants to get updates quickly, but they come
irregularly, is phone notifications. An app like WhatsApp wants to get new messages
instantly, but doesn’t want to eat up data or battery life. Problem: Phones are not
generally accessible via the internet.

Generally, most systems are behind Firewalls or NATs. To address this, there are a few techniques that can be used:

1. Port forwarding: If the client's network is using NAT, the client can set up port
   forwarding to route incoming webhook requests from the server to the client's internal network.
1. Reverse proxies: A reverse proxy can be used to route incoming webhook requests
   from the server to the client's network. The client can set up a reverse proxy that
   listens for incoming requests, then forwards them to the appropriate internal endpoint.
1. Tunneling: The client can set up a tunnel between the server and the client's
   network using a tool such as ngrok or localtunnel.

This had also become a problem with our project. Hosting a webserver which listens
for incoming requests wouldn’t have been hard, but getting connections through company
firewalls is not easy.

We wanted our code to run on a local, already set up, instance of Azure Logic
Apps. Azure Logic Apps does include functionality to receive data via webhooks.
The issue is that the server is not easily accessible from the outside, because
the server has only been used for internal processes.
There are already plans in motion to get a tunnel to access the server from the
outside, but that was out of our hands.

## Conclusion

If you want to receive data via webhooks yourself, most programming languages nowadays
offer tools to open a simple webserver without having to rely on NGINX or Apache.

Cloud services like Microsoft Power Automate even offer premade building blocks that
can enable you to receive webhook requests via drag and drop.

In general, webhooks are often a far more elegant solution than polling. Sometimes
polling is the only solution, for example if an external service doesn’t support
webhooks, or it’s impossible for the client to receive http requests. However, if
it’s possible to use webhooks, that’s more often than not the better choice.
