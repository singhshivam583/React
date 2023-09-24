import config from "../config/config";
import { Account, Client, Databases, ID } from "appwrite";


// const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("[PROJECT_ID]");

// const databases = new Databases(client);

// const promise = databases.createDocument(
//   "[DATABASE_ID]",
//   "[COLLECTION_ID]",
//   ID.unique(),
//   {}
// );

// promise.then(
//   function (response) {
//     console.log(response);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async  createAccount({email, password, name}){
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(
                ID.unique(), email, password, name); 
            if (userAccount) {
                // call another method
                
            }else {
                return userAccount;
            }

        } catch (error) {
            throw error; 
        }
    }
}

const authService = new AuthService();

export default authService;
