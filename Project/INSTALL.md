
# How to setup BreakDown:RS

There are a few options for installing and running the service.  Below are instructions for installing both to an Azure App Service as well as a Linux server.  Note that server configuration must be completed prior to deployment.

Note:  The easiest methods involve access to the source code.  As an ASP.net application, it can be deployed directly from Visual Studio

## Configuration

### Auth0
Configurin Auth0 involves adding your Tenant and ClientIDs to two files. 
- AppSettings.Json - Located in the installation folder ($Root)
  ```Json
  "Auth0": {
      "Domain": "dev-z7ypkfll.auth0.com",
      "ClientID": "47iZqi3TR0z7AXOk7f3lKYX0d1yz5NYE"
    }
  ```

- auth_config.json - Located in ($Root)\Client App\src
  ```Json
  "domain": "dev-z7ypkfll.auth0.com",
  "clientId": "47iZqi3TR0z7AXOk7f3lKYX0d1yz5NYE",
  "debugUsers":  "1" 
  ```

In both of the config files above, Domain and Client ID are strings that will be provided by Auth0.  The values above will no longer be valid as of the end of April 2020.  

The value debugUsers is to be set to "1" so that site visitors have access to all features. Set this field to anything else to revoke this access. 


### MongoDB
The MongoDB settings are found in the project's appSettings.Json file.  You will need to provide your connection string, including username and password, as well as the name of the database, and the names of the collections for tickets, users, and vehicles.

- AppSettings.Json - Located in the installation folder ($Root)
```Json
  "Database": {
    "ConnectString": "mongodb+srv://dispatch:dispatch1@test1-glzzp.azure.mongodb.net/test?retryWrites=true&w=majority",
    "DbName": "AppTest1",
    "TicketCollection": "Tickets",
    "UserCollection": "Users",
    "VehiclesCollection": "Vehicles"
  }
```

The MongoDB database can be hosted on any web-accessible server or hosted on MongoDB's own Atlas cloud.  As long as the connection string and other settings are valid, the server will be able to use the database.

---
## Hosting Options 

BreakDown:RS can be installed on either an Azure Cloud App Service or any linux server running dotNetCore.  The source can also be built for servers running Windows and OSX, but the following instructions apply to the linux runtime submitted.  

Both methods involve uploading the entire contents of the product zip file into a single file on the server. 

### Azure App Service

Deploying BreakDown:RS to an Azure App Service requires an Azure account.  Once signed into the Azure portal, create a new App Service plan.  

Instructions for locating the FTP endpoint and deploying the product can be found [here](https://docs.microsoft.com/en-us/azure/app-service/deploy-ftp).


### Linux Server

Deploying to a Linux server is less straight forward, but can provide more flexibility such as using a local database.

Instructions for setting up a clean linux server for deployment can be found [here](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-3.1) 

---

