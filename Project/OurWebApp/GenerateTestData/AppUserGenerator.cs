using FizzWare.NBuilder;
using OurWebApp.Controllers;
using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Bson;
using OurWebApp.Models;

namespace GenerateTestData
{
    public static class AppUserGenerator
    {


        static private IList<UserDetails> generateUsers(int count, string role)
        {
            var uRole = "Customer";
            if (role.Contains("D"))
                uRole = "Driver";

            return (List<UserDetails>)Builder<UserDetails>.CreateListOfSize(count)
                    .All()
                        .With(c => c.Name = Faker.Name.First() + " " + Faker.Name.Last())
                        .With(c => c.Role = uRole)
                        .With(c => c.UserID = Guid.NewGuid().ToString())
                    .Build();
        }


        /// <summary>
        /// Generate a number of AppUsers.  Evenly divided between customer and drivers.
        /// </summary>
        /// <param name="number"></param>
        /// <returns></returns>
        static public List<UserDetails> Generate(int number = 50)
        {
            var oUsers = Generate(number / 2, number / 2);
            return oUsers ;
            //throw new NotImplementedException();
        }

        static public List<UserDetails> Generate(int nCustomers, int nDrivers)
        {
            var oUsers = (List<UserDetails>)generateUsers(nCustomers, "C");
            oUsers.AddRange(generateUsers(nDrivers, "D"));
            return oUsers;
            //throw new NotImplementedException();
        }

        static public UserDetails Generate()
        {
            
            
            throw new NotImplementedException();
        }

        
    }
}
