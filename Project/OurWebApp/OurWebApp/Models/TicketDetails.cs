using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace OurWebApp.Models
{
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.5.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class TicketDetails : System.ComponentModel.INotifyPropertyChanged
    {
        public MongoDB.Bson.ObjectId _id;
        private System.Guid? _ticketID;
        private System.DateTime _dateCreated;
        private UserStub _customer = new UserStub();
        private string _status;
        private Location _serviceLocation;
        private double? _serviceDistance;
        private string _comments;
        private string _serviceType;
        private Vehicle _custVehicle;
        private UserStub _driver;
        private Vehicle _serviceVehicle;
        private System.DateTime? _assignmentTime;
        private System.DateTime? _dateUpdated;

        [JsonProperty("ticketID", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public System.Guid? TicketID
        {
            get => _ticketID;
            set
            {
                if (_ticketID != value)
                {
                    _ticketID = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("dateCreated", Required = Required.Always)]
        public System.DateTime DateCreated
        {
            get => _dateCreated;
            set
            {
                if (_dateCreated != value)
                {
                    _dateCreated = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("customer", Required = Required.Always)]
        public UserStub Customer
        {
            get => _customer;
            set
            {
                if (_customer != value)
                {
                    _customer = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("status", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string Status
        {
            get => _status;
            set
            {
                if (_status != value)
                {
                    _status = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("serviceLocation", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public Location ServiceLocation
        {
            get => _serviceLocation;
            set
            {
                if (_serviceLocation != value)
                {
                    _serviceLocation = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("serviceDistance", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public double? ServiceDistance
        {
            get => _serviceDistance;
            set
            {
                if (_serviceDistance != value)
                {
                    _serviceDistance = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("comments", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string Comments
        {
            get => _comments;
            set
            {
                if (_comments != value)
                {
                    _comments = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("serviceType", Required = Required.Always)]
        public string ServiceType
        {
            get => _serviceType;
            set
            {
                if (_serviceType != value)
                {
                    _serviceType = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("custVehicle", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public Vehicle CustVehicle
        {
            get => _custVehicle;
            set
            {
                if (_custVehicle != value)
                {
                    _custVehicle = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("driver", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public UserStub Driver
        {
            get => _driver;
            set
            {
                if (_driver != value)
                {
                    _driver = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("serviceVehicle", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public Vehicle ServiceVehicle
        {
            get => _serviceVehicle;
            set
            {
                if (_serviceVehicle != value)
                {
                    _serviceVehicle = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("assignmentTime", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public System.DateTime? AssignmentTime
        {
            get => _assignmentTime;
            set
            {
                if (_assignmentTime != value)
                {
                    _assignmentTime = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("dateUpdated", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public System.DateTime? DateUpdated
        {
            get => _dateUpdated;
            set
            {
                if (_dateUpdated != value)
                {
                    _dateUpdated = value;
                    RaisePropertyChanged();
                }
            }
        }

        private IDictionary<string, object> _additionalProperties = new Dictionary<string, object>();

        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties
        {
            get => _additionalProperties;
            set => _additionalProperties = value;
        }

        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }

        public static TicketDetails FromJson(string data)
        {
            return JsonConvert.DeserializeObject<TicketDetails>(data);
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            handler?.Invoke(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }

        public TicketStub GetStub()
        {
            return new TicketStub()
            {
                TicketID = this.TicketID,
                ServiceLocation = this.ServiceLocation,
                Customer= this.Customer,
                Driver = this.Driver,
                ServiceType = this.ServiceType,
                CreationDate = this.DateCreated
            };

        }

        public static TicketDetails BuildFromStub( TicketStub stub)
        {
            return new TicketDetails()
            {
                TicketID = stub.TicketID,
                ServiceLocation = stub.ServiceLocation,
                Customer = stub.Customer,
                Driver = stub.Driver,
                ServiceType = stub.ServiceType,
                DateCreated = DateTime.Now,
                DateUpdated = DateTime.Now

                
            };

        }
    }
}