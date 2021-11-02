using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace OurWebApp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DBTestController : ControllerBase
    {
        // GET: api/DBTest
        [HttpGet]
        public IEnumerable<TestData> Get()
        {
            var client = new MongoClient(
                "mongodb+srv://dispatch:dispatch1@test1-glzzp.azure.mongodb.net/test?retryWrites=true&w=majority"
            );
            //var list = client.ListDatabases();
            var database = client.GetDatabase("TestDB");
            var collection = database.GetCollection<TestData>("TestData");

            var query = from e in collection.AsQueryable<TestData>()
                        select e;


            return query.ToArray();
        }

       

        // POST: api/DBTest
        [HttpPost]
        public void Post([FromBody] System.Text.Json.JsonElement value)
        {
            // Read value
            //var test1 = value.ToJson();
            var test2 = value.ToString();
            var testData = Newtonsoft.Json.JsonConvert.DeserializeObject<TestData>(test2);

            var client = new MongoClient(
                "mongodb+srv://dispatch:dispatch1@test1-glzzp.azure.mongodb.net/test?retryWrites=true&w=majority"
            );
            //var list = client.ListDatabases();
            var database = client.GetDatabase("TestDB");
            var collection = database.GetCollection<TestData>("TestData");

            collection.InsertOne(testData);
        }

        // PUT: api/DBTest/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
