using System.Collections.Generic;
using Newtonsoft.Json;

namespace OurWebApp.Models
{
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.5.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class UserDetails : System.ComponentModel.INotifyPropertyChanged
    {
        public MongoDB.Bson.ObjectId _id;
        protected string _userID;
        protected string _name;
        protected string? _role;
        protected System.DateTime? _dateActive;
        protected System.DateTime? _dateCreated;

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

        /// <summary>Customer, Driver, or Dispatcher</summary>
        [JsonProperty("role", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
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

        /// <summary>The last time the user logged in.</summary>
        [JsonProperty("dateActive", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public System.DateTime? DateActive
        {
            get => _dateActive;
            set
            {
                if (_dateActive != value)
                {
                    _dateActive = value;
                    RaisePropertyChanged();
                }
            }
        }

        /// <summary>Date the user was created.
        /// </summary>
        [JsonProperty("dateCreated", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public System.DateTime? DateCreated
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

        protected IDictionary<string, object> _additionalProperties = new Dictionary<string, object>();

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

        public static UserDetails FromJson(string data)
        {
            return JsonConvert.DeserializeObject<UserDetails>(data);
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            handler?.Invoke(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }

        public UserStub GetStub()
        {
            return new UserStub()
            {
                UserID = this.UserID,
                Role = this.Role,
                Name = this.Name
            };

        }

    }
}