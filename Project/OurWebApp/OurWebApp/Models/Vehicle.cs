using System.Collections.Generic;
using Newtonsoft.Json;

namespace OurWebApp.Models
{
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.5.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class Vehicle : System.ComponentModel.INotifyPropertyChanged
    {
        private System.Guid? _vehicleID;
        private string _name;
        private string _type;

        [JsonProperty("vehicleID", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public System.Guid? VehicleID
        {
            get => _vehicleID;
            set
            {
                if (_vehicleID != value)
                {
                    _vehicleID = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("name", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string Name
        {
            get => _name;
            set
            {
                if (_name != value)
                {
                    _name = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("type", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string Type
        {
            get => _type;
            set
            {
                if (_type != value)
                {
                    _type = value;
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

        public static Vehicle FromJson(string data)
        {
            return JsonConvert.DeserializeObject<Vehicle>(data);
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            handler?.Invoke(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }

    }
}