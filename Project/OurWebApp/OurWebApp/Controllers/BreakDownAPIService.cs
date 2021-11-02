using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using OurWebApp.Models;

namespace OurWebApp.Controllers
{
    public class BreakDownAPIService : IBreakDownAPIController
    {
        public Task AddTicketAsync(TicketStub body)
        {
            var collection = DBContext.getTicketCollection();
            body.TicketID = Guid.NewGuid();
            body.CreationDate = DateTime.Now;
            var dbInsert = Task.Factory.StartNew(() =>
            {
                collection.InsertOne(TicketDetails.BuildFromStub(body));
            });
            dbInsert.Wait();
            return dbInsert;
        }
        public Task AddTicketAsync(TicketDetails body)
        {
            var collection = DBContext.getTicketCollection();
            body.TicketID = Guid.NewGuid();
            body.DateCreated = DateTime.Now;
            body.DateUpdated = DateTime.Now;
            var dbInsert = Task.Factory.StartNew(() =>
            {
                collection.InsertOne(body);
            });
            dbInsert.Wait();
            return dbInsert;
        }

        public Task CreateUserAsync(UserStub body)
        {
            var details = new UserDetails {UserID = body.UserID, Name = body.Name, Role = body.Role};

            return CreateUserAsync(details);
        }

        public Task CreateUserAsync(UserDetails body)
        {

            body.DateActive = DateTime.Now;
            body.DateCreated = DateTime.Now;

            var collection = DBContext.getUserCollection();
            var dbInsert = Task.Factory.StartNew(() =>
            {
                collection.InsertOne(body);
            });
            dbInsert.Wait();
            return dbInsert;
        }
        public Task<TicketDetails> GetTicketDetailsAsync(string ticketID)
        {
            var collection = DBContext.getTicketCollection();
            var dbQuery = Task.Factory.StartNew(() =>
            {
                var query = from e in collection.AsQueryable<TicketDetails>()
                    where e.TicketID == Guid.Parse(ticketID)
                    select e;


                return query.Any() ? query.First() : null;
            });
            dbQuery.Wait();
            return dbQuery;
        }

        

        public Task<UserDetails> GetUserDetailsAsync(string userID)
        {
            var collection = DBContext.getUserCollection();
            var dbQuery = Task.Factory.StartNew(() =>
            {
                var query = from e in collection.AsQueryable<UserDetails>()
                            where e.UserID == userID
                            select e;

                return query.Any() ? query.First() : new UserDetails();
            });
            dbQuery.Wait();
            return dbQuery;
        }

        public Task<IEnumerable<UserStub>> GetUsersAsync(int? skip, int? limit)
        {
            var collection = DBContext.getUserCollection();
            var dbQuery = Task.Factory.StartNew(() =>
            {
                var query = from e in collection.AsQueryable<UserDetails>()
                            select e;
                if (skip != null)
                    query = query.Skip((int)skip);
                if (limit != null)
                    query = query.Take((int)limit);

                var q = query.ToList();

                

                return (IEnumerable<UserStub>)q.Select(x => x.GetStub());
            });
            dbQuery.Wait();
            return dbQuery;
        }




        public Task<IEnumerable<TicketStub>> GetUserTicketsAsync(int? skip, int? limit, string sortBy, string userID)
        {
            var collection = DBContext.getTicketCollection();
            var dbQuery = Task.Factory.StartNew(() =>
            {
                var query = from e in collection.AsQueryable<TicketDetails>()
                            where e.Customer.UserID == userID
                            select e;

                if (skip != null)
                    query = query.Skip((int)skip);
                if (limit != null)
                    query = query.Take((int)limit);

                var q = query.ToList();

                // Sort the results
                // ReSharper disable once InvertIf
                if (sortBy != null)
                {
                    q = SortTicketDetails(q, sortBy);
                }

                return (IEnumerable<TicketStub>)q.Select(x => x.GetStub());
            });
            dbQuery.Wait();
            return dbQuery;
        }

        public Task<IEnumerable<TicketStub>> Search_TicketsAsync(int? skip, int? limit, string sortBy)
        {
            var collection = DBContext.getTicketCollection();
            var dbQuery = Task.Factory.StartNew(() =>
            {
                var query = from e in collection.AsQueryable<TicketDetails>()
                    select e;
                if (skip != null)
                    query = query.Skip((int)skip);
                if (limit != null)
                    query = query.Take((int)limit);

                //var q = query.ToList();

                //// Sort the results
                //if (sortBy != null)
                //{
                    
                //    q = SortTicketDetails(q, sortBy);
                //}

                List<TicketStub> oRet = new List<TicketStub>();
                foreach (var curTicket in query)
                {
                    oRet.Add(curTicket.GetStub());
                }



                return (IEnumerable<TicketStub>)oRet;
                //return (IEnumerable<TicketStub>)q.Select(x => x.GetStub());
            });
            dbQuery.Wait();
            return dbQuery;
        }

        public Task UpdateTicketDetailsAsync(TicketDetails body, string ticketID)
        {
            var collection = DBContext.getTicketCollection();

            

            var dbInsert = Task.Factory.StartNew(() =>
            {
                // get Ticket._id from ticketID
                var query = from e in collection.AsQueryable<TicketDetails>()
                    where e.TicketID == new Guid(ticketID)
                    select e;

                body._id = query.First()._id;

                var filter = Builders<TicketDetails>.Filter.Eq("TicketID", ticketID);
                collection.ReplaceOne(filter,body);
            });
            dbInsert.Wait();
            return dbInsert;
        }

        public Task UpdateUserDetailsAsync(UserDetails body, string userID)
        {
            var collection = DBContext.getUserCollection();
            var dbUser = GetUserDetailsAsync(userID);
            dbUser.Wait();

            body._id = dbUser.Result._id;
            var dbInsert = Task.Factory.StartNew(() =>
            {
                var filter = Builders<UserDetails>.Filter.Eq("UserID", userID);
                collection.ReplaceOne(filter, body);
            });
            dbInsert.Wait();
            return dbInsert;
        }




        private static List<TicketDetails> SortTicketDetails(List<TicketDetails> tickets, string sortBy)
        {
            switch (sortBy)
            {
                case "dateAsc":
                {
                    var comparer = Comparer<TicketDetails>.Create((a, b) => a.DateCreated.CompareTo(b.DateCreated));
                    tickets.Sort(comparer);
                    break;
                }

                case "dateDesc":
                {
                    var comparer = Comparer<TicketDetails>.Create((a, b) => b.DateCreated.CompareTo(a.DateCreated));
                    tickets.Sort(comparer);
                    break;
                }
            }
            // not sure this needs to be returned, as the list should be sorted in place.  But leave it for now.
            return tickets;
        }
    }
}
