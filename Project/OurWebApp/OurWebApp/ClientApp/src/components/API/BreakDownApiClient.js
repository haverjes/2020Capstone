"use strict";
/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.2.3.0 (NJsonSchema v10.1.5.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BreakDownAPIClient = /** @class */ (function () {
    function BreakDownAPIClient(baseUrl, http) {
        this.jsonParseReviver = undefined;
        this.http = http ? http : window;
        this.baseUrl = baseUrl ? baseUrl : ".";
    }
    /**
     * Fetch service tickets
     * @param skip (optional) number of records to skip for pagination
     * @param limit (optional) maximum number of records to return
     * @param sortBy (optional) sort the results based on this field
     * @return search results matching criteria
     */
    BreakDownAPIClient.prototype.search_Tickets = function (skip, limit, sortBy) {
        var _this = this;
        var url_ = this.baseUrl + "/tickets?";
        if (skip === null)
            throw new Error("The parameter 'skip' cannot be null.");
        else if (skip !== undefined)
            url_ += "skip=" + encodeURIComponent("" + skip) + "&";
        if (limit === null)
            throw new Error("The parameter 'limit' cannot be null.");
        else if (limit !== undefined)
            url_ += "limit=" + encodeURIComponent("" + limit) + "&";
        if (sortBy === null)
            throw new Error("The parameter 'sortBy' cannot be null.");
        else if (sortBy !== undefined)
            url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processSearch_Tickets(_response);
        });
    };
    BreakDownAPIClient.prototype.processSearch_Tickets = function (response) {
        var _this = this;
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                        var item = resultData200_1[_i];
                        result200.push(TicketStub.fromJS(item));
                    }
                }
                return result200;
            });
        }
        else if (status === 400) {
            return response.text().then(function (_responseText) {
                return throwException("bad input parameter", status, _responseText, _headers);
            });
        }
        else if (status === 401) {
            return response.text().then(function (_responseText) {
                return throwException("Unauthorized", status, _responseText, _headers);
            });
        }
        else if (status === 403) {
            return response.text().then(function (_responseText) {
                return throwException("Forbidden", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * Add Service Ticket
     * @param body (optional) Ticket item to add
     * @return item created
     */
    BreakDownAPIClient.prototype.addTicket = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/tickets";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        //console.log("aT:" + content_);
        var options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };
        //console.log(options_);
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processAddTicket(_response);
        });
    };
    BreakDownAPIClient.prototype.processAddTicket = function (response) {
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 201) {
            return response.text().then(function (_responseText) {
                return;
            });
        }
        else if (status === 400) {
            return response.text().then(function (_responseText) {
                return throwException("invalid input, object invalid", status, _responseText, _headers);
            });
        }
        else if (status === 401) {
            return response.text().then(function (_responseText) {
                return throwException("Unauthorized", status, _responseText, _headers);
            });
        }
        else if (status === 409) {
            return response.text().then(function (_responseText) {
                return throwException("an existing item already exists", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * Query Users
     * @param skip (optional) number of records to skip for pagination
     * @param limit (optional) maximum number of records to return
     * @return OK
     */
    BreakDownAPIClient.prototype.getUsers = function (skip, limit) {
        var _this = this;
        var url_ = this.baseUrl + "/users?";
        if (skip === null)
            throw new Error("The parameter 'skip' cannot be null.");
        else if (skip !== undefined)
            url_ += "skip=" + encodeURIComponent("" + skip) + "&";
        if (limit === null)
            throw new Error("The parameter 'limit' cannot be null.");
        else if (limit !== undefined)
            url_ += "limit=" + encodeURIComponent("" + limit) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetUsers(_response);
        });
    };
    BreakDownAPIClient.prototype.processGetUsers = function (response) {
        var _this = this;
        var status = response.status;
        console.log("TS Response: ");
        console.log(response);
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                        var item = resultData200_2[_i];
                        result200.push(UserStub.fromJS(item));
                    }
                }
                return result200;
            });
        }
        else if (status === 400) {
            return response.text().then(function (_responseText) {
                return throwException("Bad Request", status, _responseText, _headers);
            });
        }
        else if (status === 401) {
            return response.text().then(function (_responseText) {
                return throwException("Unauthorized", status, _responseText, _headers);
            });
        }
        else if (status === 403) {
            return response.text().then(function (_responseText) {
                return throwException("Forbidden", status, _responseText, _headers);
            });
        }
        else if (status === 409) {
            return response.text().then(function (_responseText) {
                return throwException("an existing item already exists", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * Create a User
     * @param body (optional)
     * @return OK
     */
    BreakDownAPIClient.prototype.createUser = function (body) {
        var _this = this;
        var url_ = this.baseUrl + "/users";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        //console.log("cU:" + content_);
        var options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };
        //console.log(options_);
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processCreateUser(_response);
        });
    };
    BreakDownAPIClient.prototype.processCreateUser = function (response) {
        var status = response.status;
        //console.log("TS Response: ");
        //console.log(response);
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                return;
            });
        }
        else if (status === 201) {
            return response.text().then(function (_responseText) {
                return;
            });
        }
        else if (status === 400) {
            return response.text().then(function (_responseText) {
                return throwException("Bad Request", status, _responseText, _headers);
            });
        }
        else if (status === 401) {
            return response.text().then(function (_responseText) {
                return throwException("Unauthorized", status, _responseText, _headers);
            });
        }
        else if (status === 403) {
            return response.text().then(function (_responseText) {
                return throwException("Forbidden", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * Get specific user
     * @return OK
     */
    BreakDownAPIClient.prototype.getUserDetails = function (userID) {
        var _this = this;
        var url_ = this.baseUrl + "/users/{userID}";
        if (userID === undefined || userID === null)
            throw new Error("The parameter 'userID' must be defined.");
        url_ = url_.replace("{userID}", encodeURIComponent("" + userID));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetUserDetails(_response);
        });
    };
    BreakDownAPIClient.prototype.processGetUserDetails = function (response) {
        var _this = this;
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = UserDetails.fromJS(resultData200);
                return result200;
            });
        }
        else if (status === 400) {
            return response.text().then(function (_responseText) {
                return throwException("Bad Request", status, _responseText, _headers);
            });
        }
        else if (status === 401) {
            return response.text().then(function (_responseText) {
                return throwException("Unauthorized", status, _responseText, _headers);
            });
        }
        else if (status === 403) {
            return response.text().then(function (_responseText) {
                return throwException("Forbidden", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return response.text().then(function (_responseText) {
                return throwException("Not Found", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * @param body (optional)
     * @return OK
     */
    BreakDownAPIClient.prototype.updateUserDetails = function (body, userID) {
        var _this = this;
        var url_ = this.baseUrl + "/users/{userID}";
        if (userID === undefined || userID === null)
            throw new Error("The parameter 'userID' must be defined.");
        url_ = url_.replace("{userID}", encodeURIComponent("" + userID));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processUpdateUserDetails(_response);
        });
    };
    BreakDownAPIClient.prototype.processUpdateUserDetails = function (response) {
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * Get tickets for user
     * @param skip (optional) number of records to skip for pagination
     * @param limit (optional) maximum number of records to return
     * @param sortBy (optional) sort the results based on this field
     * @return OK
     */
    BreakDownAPIClient.prototype.getUserTickets = function (userID, skip, limit, sortBy) {
        var _this = this;
        var url_ = this.baseUrl + "/users/{userID}/tickets?";
        if (userID === undefined || userID === null)
            throw new Error("The parameter 'userID' must be defined.");
        url_ = url_.replace("{userID}", encodeURIComponent("" + userID));
        if (skip === null)
            throw new Error("The parameter 'skip' cannot be null.");
        else if (skip !== undefined)
            url_ += "skip=" + encodeURIComponent("" + skip) + "&";
        if (limit === null)
            throw new Error("The parameter 'limit' cannot be null.");
        else if (limit !== undefined)
            url_ += "limit=" + encodeURIComponent("" + limit) + "&";
        if (sortBy === null)
            throw new Error("The parameter 'sortBy' cannot be null.");
        else if (sortBy !== undefined)
            url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetUserTickets(_response);
        });
    };
    BreakDownAPIClient.prototype.processGetUserTickets = function (response) {
        var _this = this;
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (var _i = 0, resultData200_3 = resultData200; _i < resultData200_3.length; _i++) {
                        var item = resultData200_3[_i];
                        result200.push(TicketStub.fromJS(item));
                    }
                }
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * Get Ticket Details
     * @return OK
     */
    BreakDownAPIClient.prototype.getTicketDetails = function (ticketID) {
        var _this = this;
        var url_ = this.baseUrl + "/tickets/{ticketID}";
        if (ticketID === undefined || ticketID === null)
            throw new Error("The parameter 'ticketID' must be defined.");
        url_ = url_.replace("{ticketID}", encodeURIComponent("" + ticketID));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetTicketDetails(_response);
        });
    };
    BreakDownAPIClient.prototype.processGetTicketDetails = function (response) {
        var _this = this;
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = TicketDetails.fromJS(resultData200);
                return result200;
            });
        }
        else if (status === 400) {
            return response.text().then(function (_responseText) {
                return throwException("Bad Request", status, _responseText, _headers);
            });
        }
        else if (status === 401) {
            return response.text().then(function (_responseText) {
                return throwException("Unauthorized", status, _responseText, _headers);
            });
        }
        else if (status === 403) {
            return response.text().then(function (_responseText) {
                return throwException("Forbidden", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return response.text().then(function (_responseText) {
                return throwException("Not Found", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * Update Ticket
     * @param body (optional)
     * @return OK
     */
    BreakDownAPIClient.prototype.updateTicketDetails = function (body, ticketID) {
        var _this = this;
        var url_ = this.baseUrl + "/tickets/{ticketID}";
        if (ticketID === undefined || ticketID === null)
            throw new Error("The parameter 'ticketID' must be defined.");
        url_ = url_.replace("{ticketID}", encodeURIComponent("" + ticketID));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processUpdateTicketDetails(_response);
        });
    };
    BreakDownAPIClient.prototype.processUpdateTicketDetails = function (response) {
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                return;
            });
        }
        else if (status === 400) {
            return response.text().then(function (_responseText) {
                return throwException("Bad Request", status, _responseText, _headers);
            });
        }
        else if (status === 401) {
            return response.text().then(function (_responseText) {
                return throwException("Unauthorized", status, _responseText, _headers);
            });
        }
        else if (status === 403) {
            return response.text().then(function (_responseText) {
                return throwException("Forbidden", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return response.text().then(function (_responseText) {
                return throwException("Not Found", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    return BreakDownAPIClient;
}());
exports.BreakDownAPIClient = BreakDownAPIClient;
var UserDetails = /** @class */ (function () {
    function UserDetails(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserDetails.prototype.init = function (_data) {
        if (_data) {
            this.userID = _data["userID"];
            this.name = _data["name"];
            this.role = _data["role"];
            this.dateActive = _data["dateActive"] ? new Date(_data["dateActive"].toString()) : undefined;
            this.dateCreated = _data["dateCreated"] ? new Date(_data["dateCreated"].toString()) : undefined;
        }
    };
    UserDetails.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UserDetails();
        result.init(data);
        return result;
    };
    UserDetails.prototype.toStub = function () {
        var stub = new UserStub();
        stub.name = this.name;
        stub.userID = this.userID;
        stub.role = this.role;
        return stub;
    };
    UserDetails.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userID"] = this.userID;
        data["name"] = this.name;
        data["role"] = this.role;
        data["dateActive"] = this.dateActive ? this.dateActive.toISOString() : undefined;
        data["dateCreated"] = this.dateCreated ? this.dateCreated.toISOString() : undefined;
        return data;
    };
    return UserDetails;
}());
exports.UserDetails = UserDetails;
var Vehicle = /** @class */ (function () {
    function Vehicle(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Vehicle.prototype.init = function (_data) {
        if (_data) {
            this.vehicleID = _data["vehicleID"];
            this.name = _data["name"];
            this.type = _data["type"];
        }
    };
    Vehicle.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Vehicle();
        result.init(data);
        return result;
    };
    Vehicle.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["vehicleID"] = this.vehicleID;
        data["name"] = this.name;
        data["type"] = this.type;
        return data;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var TicketStub = /** @class */ (function () {
    function TicketStub(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TicketStub.prototype.init = function (_data) {
        if (_data) {
            this.ticketID = _data["ticketID"];
            this.customer = _data["customer"] ? UserStub.fromJS(_data["customer"]) : undefined;
            this.serviceLocation = _data["serviceLocation"] ? Location.fromJS(_data["serviceLocation"]) : undefined;
            this.driver = _data["driver"] ? UserStub.fromJS(_data["driver"]) : undefined;
            this.serviceType = _data["serviceType"];
            this.creationDate = _data["creationDate"] ? new Date(_data["creationDate"].toString()) : undefined;
        }
    };
    TicketStub.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TicketStub();
        result.init(data);
        return result;
    };
    TicketStub.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["ticketID"] = this.ticketID;
        data["customer"] = this.customer ? this.customer.toJSON() : undefined;
        data["serviceLocation"] = this.serviceLocation ? this.serviceLocation.toJSON() : undefined;
        data["driver"] = this.driver ? this.driver.toJSON() : undefined;
        data["serviceType"] = this.serviceType;
        data["creationDate"] = this.creationDate ? this.creationDate.toISOString() : undefined;
        return data;
    };
    return TicketStub;
}());
exports.TicketStub = TicketStub;
var Location = /** @class */ (function () {
    function Location(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Location.prototype.init = function (_data) {
        if (_data) {
            this.id = _data["id"];
            this.street = _data["street"];
            this.city = _data["city"];
            this.state = _data["state"];
            this.zip = _data["zip"];
            if (Array.isArray(_data["GPS"])) {
                this.gPS = [];
                for (var _i = 0, _a = _data["GPS"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.gPS.push(item);
                }
            }
        }
    };
    Location.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Location();
        result.init(data);
        return result;
    };
    Location.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["street"] = this.street;
        data["city"] = this.city;
        data["state"] = this.state;
        data["zip"] = this.zip;
        if (Array.isArray(this.gPS)) {
            data["GPS"] = [];
            for (var _i = 0, _a = this.gPS; _i < _a.length; _i++) {
                var item = _a[_i];
                data["GPS"].push(item);
            }
        }
        return data;
    };
    return Location;
}());
exports.Location = Location;
var UserStub = /** @class */ (function () {
    function UserStub(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserStub.prototype.init = function (_data) {
        if (_data) {
            this.userID = _data["userID"];
            this.role = _data["role"];
            this.name = _data["name"];
        }
    };
    UserStub.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UserStub();
        result.init(data);
        return result;
    };
    UserStub.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userID"] = this.userID;
        data["role"] = this.role;
        data["name"] = this.name;
        return data;
    };
    return UserStub;
}());
exports.UserStub = UserStub;
var TicketDetails = /** @class */ (function () {
    function TicketDetails(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
        if (!data) {
            this.customer = new UserStub();
        }
    }
    TicketDetails.prototype.init = function (_data) {
        if (_data) {
            this.ticketID = _data["ticketID"];
            this.dateCreated = _data["dateCreated"] ? new Date(_data["dateCreated"].toString()) : undefined;
            this.customer = _data["customer"] ? UserStub.fromJS(_data["customer"]) : new UserStub();
            this.status = _data["status"];
            this.serviceLocation = _data["serviceLocation"] ? Location.fromJS(_data["serviceLocation"]) : undefined;
            this.serviceDistance = _data["serviceDistance"];
            this.comments = _data["comments"];
            this.serviceType = _data["serviceType"];
            this.custVehicle = _data["custVehicle"] ? Vehicle.fromJS(_data["custVehicle"]) : undefined;
            this.driver = _data["driver"] ? UserStub.fromJS(_data["driver"]) : undefined;
            this.serviceVehicle = _data["serviceVehicle"] ? Vehicle.fromJS(_data["serviceVehicle"]) : undefined;
            this.assignmentTime = _data["assignmentTime"] ? new Date(_data["assignmentTime"].toString()) : undefined;
            this.dateUpdated = _data["dateUpdated"] ? new Date(_data["dateUpdated"].toString()) : undefined;
        }
    };
    TicketDetails.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TicketDetails();
        result.init(data);
        return result;
    };
    TicketDetails.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["ticketID"] = this.ticketID;
        data["dateCreated"] = this.dateCreated ? this.dateCreated.toISOString() : undefined;
        data["customer"] = this.customer ? this.customer.toJSON() : undefined;
        data["status"] = this.status;
        data["serviceLocation"] = this.serviceLocation ? this.serviceLocation.toJSON() : undefined;
        data["serviceDistance"] = this.serviceDistance;
        data["comments"] = this.comments;
        data["serviceType"] = this.serviceType;
        data["custVehicle"] = this.custVehicle ? this.custVehicle.toJSON() : undefined;
        data["driver"] = this.driver ? this.driver.toJSON() : undefined;
        data["serviceVehicle"] = this.serviceVehicle ? this.serviceVehicle.toJSON() : undefined;
        data["assignmentTime"] = this.assignmentTime ? this.assignmentTime.toISOString() : undefined;
        data["dateUpdated"] = this.dateUpdated ? this.dateUpdated.toISOString() : undefined;
        return data;
    };
    return TicketDetails;
}());
exports.TicketDetails = TicketDetails;
var UserRole;
(function (UserRole) {
    UserRole["Driver"] = "Driver";
    UserRole["Customer"] = "Customer";
    UserRole["Dispatcher"] = "Dispatcher";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var ApiException = /** @class */ (function (_super) {
    __extends(ApiException, _super);
    function ApiException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isApiException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    ApiException.isApiException = function (obj) {
        return obj.isApiException === true;
    };
    return ApiException;
}(Error));
exports.ApiException = ApiException;
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}
//# sourceMappingURL=BreakDownApiClient.js.map