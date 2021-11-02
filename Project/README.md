# BreakDown:RS

This source file contains the following folders

- OurWebApp: This is the project for BreakDown:RS.  As an ASP.Net application, it contains the following:
  - Web Server
  - API Controller
  - Client App: Everything the server sends to the client that creates the UI.
- GeneratetestData:  A simple tool that generates random testing data using the models and methods of the API.  
  - At the moment, running this tool will result in an error due to DB configuration.  Instructions on how to run the program are in comments of program.cs.

## Notes
- The project was built entirely in Visual Studio 2019 (Community Edition)
- To compile the source you will need dotNetCore (v3.1 or greater) installed
  - Managed by VS2019 is preffered, but dotNetCore CLI tools can also work.
- To run the binaries you will need NodeJS installed. 
  - Prior to running the binaries you will need to open a terminal at the ClientApp folder and run:  (Does not apply to installation package)
    ```
    npm update
    ```
