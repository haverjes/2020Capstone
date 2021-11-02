

Directory: .\   
| Name | Description |                                                                 
|------|--------------|                                                       
|OurWebApp.sln | Solution file for VS 2019                                                         
|ReadMe.md | Basic readme file giving some notes on the source code.

Directory: .\OurWebApp\GenerateTestData


| Name | Description |                                                                 
|------|--------------|                                                                 
|appsettings.json| Default settings file |    
|AppUserGenerator.cs| Class for generating users |                                                   
|GenerateTestData.csproj| Project file |                                             
|Program.cs| Contains Main function.                                                  
|TestDataSet.cs | Class for generating Tickets and users. |                                                       


Directory: .\OurWebApp

| Name | Description |                                                                 
|------|--------------|                                     
|appsettings.json| Settings file.  Contains config for Auth0 and MongoDB |                                                      
|DBContext.cs| Class for getting DB and collection objects for MongoDB.net LINQ statements.                                                          
|OurWebApp.csproj| Project file |                                                       
|OurWebApp.csproj| Project file |                                                             
|Program.cs | Application startup file.                                                            
|Startup.cs | ASP server startup file                                                                                                                   


Directory: .\OurWebApp\ClientApp

| Name | Description |                                                                 
|------|--------------|                                                                                                                           
|package-lock.json |  NodeJS traacking file                                                     
|package.json    |  NodeJS management file                                              
|tsconfig.json   | TypeScript configuration file                                                      


    Directory: .\OurWebApp\ClientApp\public


| Name | Description |                                                                 
|------|--------------|                                                                 
|favicon.ico | Icon for default web page behavior                                                          
|index.html | Basic html file for users that can't run Javascript apps.                                                           
|manifest.json | Contains basic CSS for index.html                                                        


    Directory: .\OurWebApp\ClientApp\src


| Name | Description |                                                                 
|------|--------------|                                                                                                                  
|App.jsx | The primary SPA component inside the Auth context                                                              
|App.test.js | An unused testing component                                                           
|auth_config.json| Config for Auth0 settings                                                      
|custom.css | Where we would have stored site-wide CSS had we gotten that far.                                                            
|index.jsx  | Top-level SPA component.  Sets Auth0 context provider                                                           
|react-app-env.d.ts | Typescript file required to use typescript with react.                                                    
|react-auth0-spa.js | Custom functional React component for using Auth0Client                                                    
|registerServiceWorker.js | We don't know, but it breaks without this file                                              


    Directory: .\OurWebApp\ClientApp\src\assets

| Name | Description |                                                                 
|------|--------------|                                                                 
|bootstrap | Folder:  standard assests for BootStrap (File list not provided)                                                            
|css   | Folder:  standard assests for BootStrap (File list not provided)                                                                
|img   | Folder:  Just images that may or may  not be used in the application (File list not provided)                                                               
|js    | Folder:  standard assests for BootStrap (File list not provided)                                                               
|Breakdown.png | Out logo.  Made by Kelsey                                                        
|loading.svg | Loading animation



    Directory: 
    .\OurWebApp\ClientApp\src\components


| Name | Description |                                                                 
|------|--------------|                                                                                                                                  
|CustHome.jsx | Intended dashboard for customer users                                                         
|DispatchHome.jsx | Intended dashboard for dispatch users                                                              
|DriverHome.jsx   | Unused.  Intended dashboard for driver users                                                              
|Highlight.js     | Syntax highlighting component, mostly used in Profile view                                                     
|Home.jsx         | The first screen the user sees                                                     
|Layout.jsx       | Defines the layout of nav menu and main page areas                                                    
|Loading.js       | Displays loading animation.                                                     
|Login.jsx        | Defines the login button area                                              
|NavMenu.css      | CSS for the NavMenu                                                     
|NavMenu.jsx        | The makes up the menu bar at the top of the page                                                   
|NewTicketModal.jsx   | Component to house the TicketForm in a modal.  Combined with UI button                                                 
|SplashPageCarousel.jsx | Component to display a carousel of images on Home                                               
|TicketDetailView.jsx   | Component for viewing and modifying Ticket details                                              
|TicketForm.jsx         | Component to let users create a service ticket                                               
|UserDetailView.jsx     | Component for viewing and modifying User details                                               
|UserTest.jsx           | Initially a test page, now the final User Management page                                               


    Directory: 
    .\OurWebApp\ClientApp\src\components\API


| Name | Description |                                                                 
|------|--------------|                                                                 
|BreakDownApiClient.js      | Generated by TypeScript                                           
|BreakDownApiClient.js.map  | Generated by TypeScript                                           
|BreakDownApiClient.ts      | Implements all API models and actions.                                           


    Directory: .\OurWebApp\ClientApp\src\utils


| Name | Description |                                                                 
|------|--------------|                                                                 
|AuthTools.jsx | Unused teaching aide for learning Auth0 interactions.                                                        
|history.js      | Generates and maintains a psuedo-browser-history so browser nav buttons work in the SPA.                                                      
|userUtils.jsx   | Custtom functions for interacting with site user data from Auth0 and the database.                                                      


    Directory: .\OurWebApp\ClientApp\src\views


| Name | Description |                                                                 
|------|--------------|                                                                 
|Profile.jsx   | Shows the user's data that comes in from Auth0.  Intended to be more of a user profile management page.                                                        


 
    Directory: .\OurWebApp\Controllers


| Name | Description |                                                                 
|------|--------------|                                                                 
|BreakDownApiController.cs  | Passes HTTP requests to the API service for processing.  Also processes results and send the appropriate response to the client.                                  
|BreakDownAPIService.cs  | Implements the API actions.  Injected into the controller as a dependancy.                                              
|IBreakDownAPIController.cs | Interface definiton for the APIController and service.


    Directory: .\OurWebApp\Models


| Name | Description |                                                                 
|------|--------------|                                  
|Location.cs          | Stored Location data                                                 
|TicketDetails.cs     | Stores details of tickets.                                                
|TicketStub.cs        | Limited ticket data for multi-ticket search requests                                                 
|UserDetails.cs       | Stores user details.                                                 
|UserRole.cs          | Simple Enum for user roles (Deprecated)                             
|UserStub.cs          | Simple subset ofr UserDetails data.                                                 
|Vehicle.cs          | Unused class for tracking service vehicles.                                                 


    Directory: .\OurWebApp\Pages


| Name | Description |                                                                 
|------|--------------|                                                                 
|Breakdown.png        | Standard logo                                                 
|Error.cshtml         | Standard error page.                                                 
|Error.cshtml.cs      | Standard error page.                                                
|_ViewImports.cshtml  | No one is really sure about this file.                                                 


    Directory: .\OurWebApp\Properties


| Name | Description |                                                                 
|------|--------------|                                             
|launchSettings.json   | Generated file of settings that VS uses to run the program.                                              

