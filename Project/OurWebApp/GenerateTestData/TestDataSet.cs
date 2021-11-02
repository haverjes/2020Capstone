using OurWebApp.Controllers;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using FizzWare.NBuilder;
using OurWebApp.Models;

namespace GenerateTestData
{
    public class TestDataSet
    {
        public List<UserDetails> Users { get; set; }
        public List<TicketDetails> Tickets { get; set; }

        public List<UserDetails> Customers => Users.Where(e => e.Role == "Customer").ToList();
        public List<UserDetails> Drivers => Users.Where(e => e.Role == "Driver").ToList();
         public List<UserStub> CustomerStubs => Customers.Select(x => x.GetStub()).ToList();
        public List<UserStub> DriverStubs => Drivers.Select(x => x.GetStub()).ToList();

        private RandomGenerator _daysGenerator = new RandomGenerator();

        public TestDataSet()
        {
            Users = new List<UserDetails>();
            Tickets = new List<TicketDetails>();
        }

        public void GenerateUsers(int customers = 0, int drivers = 0)
        {
            Users = AppUserGenerator.Generate(customers, drivers);
        }

        public void GenerateTickets(int count)
        {
            Tickets = (List<TicketDetails>)Builder<TicketDetails>.CreateListOfSize(count)
                    .All()
                        .With(c => c.Customer = Pick<UserStub>.RandomItemFrom(CustomerStubs))
                        .With(c => c.Driver = Pick<UserStub>.RandomItemFrom(DriverStubs))
                        .With(c => c.Comments = Faker.Lorem.Paragraph(5))
                        .With(c => c.DateCreated = DateTime.Now.AddDays(-_daysGenerator.Next(1, 10)))
                        .With(c => c.ServiceLocation = generateLocation())
                        .With(c => c.Status = getStatus())
                        .With(c => c.ServiceVehicle = new Vehicle())
                        .With(c => c.TicketID = Guid.NewGuid())
                    .Build();
        }

        protected Location generateLocation()
        {
            return Builder<Location>.CreateNew()
                        .With(c => c.Street = Faker.Address.StreetAddress())
                        .With(c => c.City = Faker.Address.City())
                        .With(c => c.State = Faker.Address.UsState())
                        .With(c => c.Zip = Faker.Address.ZipCode())
                    .Build();
        }

        

        protected string getStatus()
        {
            string[] values = {"Pending", "In Progress", "Completed"};
            return Pick<string>.RandomItemFrom((values));
        }
    }
}
