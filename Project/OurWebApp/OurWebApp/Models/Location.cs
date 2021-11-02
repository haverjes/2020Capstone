using System.Collections.Generic;
using Newtonsoft.Json;

namespace OurWebApp.Models
{
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.5.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class Location : System.ComponentModel.INotifyPropertyChanged
    {
        private System.Guid? _id;
        private string _street;
        private string _city;
        private string _state;
        private string _zip;
        private List<double> _gPS;

        [JsonProperty("id", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public System.Guid? Id
        {
            get => _id;
            set
            {
                if (_id != value)
                {
                    _id = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("street", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string Street
        {
            get => _street;
            set
            {
                if (_street != value)
                {
                    _street = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("city", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string City
        {
            get => _city;
            set
            {
                if (_city != value)
                {
                    _city = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("state", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string State
        {
            get => _state;
            set
            {
                if (_state != value)
                {
                    _state = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("zip", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string Zip
        {
            get => _zip;
            set
            {
                if (_zip != value)
                {
                    _zip = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("GPS", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public List<double> GPS
        {
            get => _gPS;
            set
            {
                if (_gPS != value)
                {
                    _gPS = value;
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

        public static Location FromJson(string data)
        {
            return JsonConvert.DeserializeObject<Location>(data);
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            handler?.Invoke(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }

    }
}