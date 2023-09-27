/* eslint-disable no-useless-catch */
import conf from "../conf/conf.js";
import { Account, Client, ID } from "appwrite";


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
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async  createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(
                ID.unique(), email, password, name); 
            if (userAccount) {
                // call another method
                return this.login({email, password});
                
            }else {
                return userAccount;
            }

        } catch (error) {
            throw error; 
        }
    }

    async login({email, password}){
        try {
           return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();

        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error", error);
        }
    }

}

const authService = new AuthService();

export default authService;
