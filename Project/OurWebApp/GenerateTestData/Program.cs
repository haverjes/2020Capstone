using System;
using MongoDB.Bson;
using System.Collections.Generic;
using System.Text;
using MongoDB.Driver;
using OurWebApp.Controllers;
using OurWebApp;
namespace GenerateTestData
{
    class Program
    {
        /* Note to Xie:  This program was used to generate test data and populate the database using the models and methods from the API.
         *  In the product's final form, this code doesn't work because the DB config is no longer hardcoded, and reading the configuation
         *    file is part of the MVC middleware, so this program doesn't have access.
         *  To use this tool, please swap the commented variable definition sections near the top of OutWebApp/DBContext.cs
         */
        
        static void Main(string[] args)
        {
            Console.Write("Wipe existing data from DB? : ");
            var inp = Console.ReadLine();


            if (inp.ToLower().Contains("y"))
            {
                DBContext.wipeDB();
            }

            TestDataSet oTest = new TestDataSet();
            
            // Create 30 users; 10 customers, 10 drivers
            
            oTest.GenerateUsers(20, 10);

            // Create 10 tickets, randomly selecting customers and drivers.
            oTest.GenerateTickets(10);



            Console.WriteLine("Tying to insert into DB");
            var oService = new BreakDownAPIService();

            foreach (var user in oTest.Users)
            {
                Console.WriteLine($"Inserting user: {user.UserID}");
                oService.CreateUserAsync(user);
            }

            foreach (var ticket in oTest.Tickets)
            {
                Console.WriteLine($"Inserting ticket: {ticket.TicketID}");
                //Console.WriteLine(ticket.ToJson<OurWebApp.Models.TicketDetails>());
                oService.AddTicketAsync(ticket);
            }
        }
    }
}
