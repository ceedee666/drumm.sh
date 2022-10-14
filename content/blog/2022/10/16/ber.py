import requests
import time
import json

# Constants 
CLIENTID = "sb-306775e1-5bab-4d24-ae55-6dfd7b744e1e!b150389|ner-production!b30772"
CLIENTSECRET = "KSdPAa9LKqr7aRzYSJthwnXSfzE="

AUTH_SERVICE = "https://4s331f8rtv2n8hdr.authentication.eu10.hana.ondemand.com/oauth/token?grant_type=client_credentials"
BER_SERVICE = "https://business-entity-recognition.cfapps.eu10.hana.ondemand.com/api/v1/inference/jobs"

#Get input from the use
user_input = input("Please enter a text: ")

# Step 1: get the bearer token
authentication = requests.get(AUTH_SERVICE, auth = (CLIENTID, CLIENTSECRET))

# Check if we got an authentication token 
if authentication.status_code == 200:

    #Step 2: Submit the inference job
    payload = {"text": user_input, "modelName": "sap_address_entity"}
    headers = {"Authorization": "Bearer " + authentication.json()["access_token"]}
    
    submitted_job = requests.post(BER_SERVICE, json=payload, headers=headers)

    #Step 3: Wait until the job is finished
    job_finished = False
    while not job_finished:
        job_result = requests.get(BER_SERVICE + "/" + submitted_job.json()["data"]["id"], headers=headers)
        if job_result.json()["data"]["status"] == "SUCCESS":
            job_finished = True
            print("Job finished") 
        else:
            print(".", end="", flush=True)
            time.sleep(2)    

    # Print the job results
    format_jason = json.dumps(job_result.json(), indent=2)
    print(format_jason) 
