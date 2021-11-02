using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace OurWebApp
{
    public class TestData
    {
        public ObjectId id { get; set; }
        public string name { get; set; }
        public string date { get; set; }

        public string ids { get { return id.ToString(); } }
    }
}
