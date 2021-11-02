using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using OurWebApp.Controllers;
using OurWebApp.Models;

namespace OurWebApp
{
    public static class DBContext
    {

        public static IConfiguration Configuration { get; set; }
        private static string connectString { get => $"{Configuration["Database:ConnectString"]}"; }
        private static string DbName { get => $"{Configuration["Database:DbName"]}"; }
        private static string TicketCol { get => $"{Configuration["Database:TicketCollection"]}"; }
        private static string UsersCol { get => $"{Configuration["Database:UserCollection"]}"; }
        private static string VehiclesCol { get => $"{Configuration["Database:Vehicles"]}"; }
        //public static string connectString = "mongodb+srv://dispatch:dispatch1@test1-glzzp.azure.mongodb.net/test?retryWrites=true&w=majority";
        //public static string DbName = "AppTest1";
        //public static string TicketCol = "Tickets";
        //public static string UsersCol = "Users";
        //public static string VehiclesCol = "Vehicles";

        private static MongoClient getClient()
        {
            return new MongoClient(connectString);
        }

        private static IMongoDatabase getDB()
        {
            return getClient().GetDatabase(DbName);
        }

        public static IMongoCollection<UserDetails> getUserCollection()
        {
            return getDB().GetCollection<UserDetails>(UsersCol);
        }

        public static IMongoCollection<TicketDetails> getTicketCollection()
        {
            return getDB().GetCollection<TicketDetails>(TicketCol);
        }

        public static IMongoCollection<Vehicle> getVehicleCollection()
        {
            return getDB().GetCollection<Vehicle>(VehiclesCol);
        }


        public static void wipeDB()
        {
            var deleteUserDetails = Builders<UserDetails>.Filter.Empty;
            getUserCollection().DeleteMany(deleteUserDetails);

            var deleteTicketDetails = Builders<TicketDetails>.Filter.Empty;
            getTicketCollection().DeleteMany(deleteTicketDetails);

            var deleteVehicle = Builders<Vehicle>.Filter.Empty;
            getVehicleCollection().DeleteMany(deleteVehicle);

        }
    }
}
