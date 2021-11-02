using System.Collections.Generic;
using Newtonsoft.Json;

namespace OurWebApp.Models
{
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.5.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class TicketStub : System.ComponentModel.INotifyPropertyChanged
    {
        private System.Guid? _ticketID;
        private UserStub _customer;
        private Location _serviceLocation;
        private UserStub _driver;
        private string _serviceType;
        private System.DateTime? _creationDate;

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

        [JsonProperty("customer", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
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

        [JsonProperty("serviceType", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
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

        [JsonProperty("creationDate", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public System.DateTime? CreationDate
        {
            get => _creationDate;
            set
            {
                if (_creationDate != value)
                {
                    _creationDate = value;
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

        public static TicketStub FromJson(string data)
        {
            return JsonConvert.DeserializeObject<TicketStub>(data);
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            handler?.Invoke(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }

    }
}