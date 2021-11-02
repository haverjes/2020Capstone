using System.Collections.Generic;
using System.Threading.Tasks;
using OurWebApp.Models;

namespace OurWebApp.Controllers
{
    [System.CodeDom.Compiler.GeneratedCode("NSwag", "13.2.3.0 (NJsonSchema v10.1.5.0 (Newtonsoft.Json v12.0.0.0))")]
    public interface IBreakDownAPIController
    {
        /// <summary>Fetch service tickets</summary>
        /// <param name="skip">number of records to skip for pagination</param>
        /// <param name="limit">maximum number of records to return</param>
        /// <param name="sortBy">sort the results based on this field</param>
        /// <returns>search results matching criteria</returns>
        Task<IEnumerable<TicketStub>> Search_TicketsAsync(int? skip, int? limit, string sortBy);

        /// <summary>Add Service Ticket</summary>
        /// <param name="body">Ticket item to add</param>
        /// <returns>item created</returns>
        Task AddTicketAsync(TicketStub body);

        /// <summary>Query Users</summary>
        /// <param name="skip">number of records to skip for pagination</param>
        /// <param name="limit">maximum number of records to return</param>
        /// <returns>OK</returns>
        Task<IEnumerable<UserStub>> GetUsersAsync(int? skip, int? limit);

        /// <summary>Create a User</summary>
        /// <returns>OK</returns>
        Task CreateUserAsync(UserStub body);

        /// <summary>Get specific user</summary>
        /// <returns>OK</returns>
        Task<UserDetails> GetUserDetailsAsync(string userID);

        /// <returns>OK</returns>
        Task UpdateUserDetailsAsync(UserDetails body, string userID);

        /// <summary>Get tickets for user</summary>
        /// <param name="skip">number of records to skip for pagination</param>
        /// <param name="limit">maximum number of records to return</param>
        /// <param name="sortBy">sort the results based on this field</param>
        /// <returns>OK</returns>
        Task<IEnumerable<TicketStub>> GetUserTicketsAsync(int? skip, int? limit, string sortBy, string userID);

        /// <summary>Get Ticket Details</summary>
        /// <returns>OK</returns>
        Task<TicketDetails> GetTicketDetailsAsync(string ticketID);

        /// <summary>Update Ticket</summary>
        /// <returns>OK</returns>
        Task UpdateTicketDetailsAsync(TicketDetails body, string ticketID);

    }
}