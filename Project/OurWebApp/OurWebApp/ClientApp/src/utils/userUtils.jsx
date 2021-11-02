import { BreakDownAPIClient, UserStub, UserDetails, UserRole} from '../components/API/BreakDownApiClient';


export class AppUser {
    async getAppUseRole(user) {
        let userID = user.sub;
        let promise = "";
        //console.log("Check 1");
        //console.log(user);
        if (userID != "") {
            //console.log("User ID detected");
            promise = this.getUserDetails(userID).then(
                (userDetails) => {
                    //console.log(userDetails);
                    if (userDetails.userID == null) {
                        // Create new user
                        //console.log("Creating new user");
                        userDetails = this.createNewUser(user);
                    }
                    //console.log("Got userDetails");
                    //console.log(userDetails);
                   
                    return userDetails.role;
                });

            let something = await promise;
            //console.log(something);
            return something;
        } else {
            return "Visitor";
        }

        
    }


    async getUserDetails(userID) {
        // Create instance of the API Client
        let client = new BreakDownAPIClient();
        let details = new UserDetails();
        let promise = client.getUserDetails(userID)
        details = await promise;
        return details;
    }


    
    async createNewUser(user) {
        let client = new BreakDownAPIClient();
        var details = new UserStub();

        details.userID = user.sub;
        details.name = user.name;
        details.role = "Customer";

        client.createUser(details);

        return details;
    }

}
