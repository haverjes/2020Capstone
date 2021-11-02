using System.Collections.Generic;
using Newtonsoft.Json;

namespace OurWebApp.Models
{
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.5.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class UserStub : System.ComponentModel.INotifyPropertyChanged
    {
        private string _userID;
        private string? _role;
        private string _name;

        [JsonProperty("userID", Required = Required.Always)]
        public string UserID
        {
            get => _userID;
            set
            {
                if (_userID != value)
                {
                    _userID = value;
                    RaisePropertyChanged();
                }
            }
        }

        /// <summary>Customer, Driver, or Dispatcher</summary>
        [JsonProperty("role", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        [JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
        public string? Role
        {
            get => _role;
            set
            {
                if (_role != value)
                {
                    _role = value;
                    RaisePropertyChanged();
                }
            }
        }

        [JsonProperty("name", Required = Required.Always)]
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

        public static UserStub FromJson(string data)
        {
            return JsonConvert.DeserializeObject<UserStub>(data);
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            handler?.Invoke(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }

    }
}