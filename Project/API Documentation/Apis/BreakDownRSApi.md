# BreakDownRSApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTicket**](BreakDownRSApi.md#addTicket) | **POST** /tickets | Add Service Ticket
[**createUser**](BreakDownRSApi.md#createUser) | **POST** /users | Create a User
[**createVehicle**](BreakDownRSApi.md#createVehicle) | **POST** /vehicles | 
[**getTicketDetails**](BreakDownRSApi.md#getTicketDetails) | **GET** /tickets/{ticketID} | Get Ticket Details
[**getTicketServiceVehicle**](BreakDownRSApi.md#getTicketServiceVehicle) | **GET** /vehicles/{ticketID] | Your GET endpoint
[**getUserDetails**](BreakDownRSApi.md#getUserDetails) | **GET** /users/{userID} | Get specific user
[**getUserTickets**](BreakDownRSApi.md#getUserTickets) | **GET** /users/{userID}/tickets | Get tickets for user
[**getUsers**](BreakDownRSApi.md#getUsers) | **GET** /users | Query Users
[**getVehicles**](BreakDownRSApi.md#getVehicles) | **GET** /vehicles | Your GET endpoint
[**searchTickets**](BreakDownRSApi.md#searchTickets) | **GET** /tickets | Fetch service tickets
[**updateTicketDetails**](BreakDownRSApi.md#updateTicketDetails) | **PUT** /tickets/{ticketID} | Update Ticket
[**updateUserDetails**](BreakDownRSApi.md#updateUserDetails) | **PUT** /users/{userID} | 


<a name="addTicket"></a>
# **addTicket**
> addTicket(serviceTicket)

Add Service Ticket

    Adds an Ticket to the system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceTicket** | [**TicketStub**](\Models/TicketStub.md)| Ticket item to add | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="createUser"></a>
# **createUser**
> createUser(userDetails)

Create a User

    Create a new user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDetails** | [**UserDetails**](\Models/UserDetails.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="createVehicle"></a>
# **createVehicle**
> createVehicle(vehicle)



    Create a new vehicle in the database.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicle** | [**Vehicle**](\Models/Vehicle.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="getTicketDetails"></a>
# **getTicketDetails**
> TicketDetails getTicketDetails(ticketID)

Get Ticket Details

    Get the details of a single service ticket.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketID** | **String**|  | [default to null]

### Return type

[**TicketDetails**](\Models/TicketDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTicketServiceVehicle"></a>
# **getTicketServiceVehicle**
> Vehicle getTicketServiceVehicle()

Your GET endpoint

    Return the Vehicle that is/did provide service for the given ticket.

### Parameters
This endpoint does not need any parameter.

### Return type

[**Vehicle**](\Models/Vehicle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserDetails"></a>
# **getUserDetails**
> UserDetails getUserDetails(userID)

Get specific user

    Get the details of a specific user.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **String**|  | [default to null]

### Return type

[**UserDetails**](\Models/UserDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserTickets"></a>
# **getUserTickets**
> List getUserTickets(userID, skip, limit, sortBy)

Get tickets for user

    Return tickets related to a specific user.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **String**|  | [default to null]
 **skip** | **Integer**| number of records to skip for pagination | [optional] [default to null]
 **limit** | **Integer**| maximum number of records to return | [optional] [default to null]
 **sortBy** | **String**| sort the results based on this field | [optional] [default to null]

### Return type

[**List**](\Models/TicketStub.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> List getUsers(skip, limit)

Query Users

    Return the collection of UserStubs from the database.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| number of records to skip for pagination | [optional] [default to null]
 **limit** | **Integer**| maximum number of records to return | [optional] [default to null]

### Return type

[**List**](\Models/UserStub.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getVehicles"></a>
# **getVehicles**
> List getVehicles()

Your GET endpoint

    Get a list of all vehicles.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](\Models/Vehicle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="searchTickets"></a>
# **searchTickets**
> List searchTickets(skip, limit, sortBy)

Fetch service tickets

    By passing in the appropriate options, you can search for available tickets in the system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| number of records to skip for pagination | [optional] [default to null]
 **limit** | **Integer**| maximum number of records to return | [optional] [default to null]
 **sortBy** | **String**| sort the results based on this field | [optional] [default to null]

### Return type

[**List**](\Models/TicketStub.md)

### Authorization

[OpenIDC](../README.md#OpenIDC)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateTicketDetails"></a>
# **updateTicketDetails**
> updateTicketDetails(ticketID, ticketDetails)

Update Ticket

    Update the details of a ServiceTicket.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketID** | **String**|  | [default to null]
 **ticketDetails** | [**TicketDetails**](\Models/TicketDetails.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="updateUserDetails"></a>
# **updateUserDetails**
> updateUserDetails(userID, userDetails)



    Update part of a user&#39;s records

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **String**|  | [default to null]
 **userDetails** | [**UserDetails**](\Models/UserDetails.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

