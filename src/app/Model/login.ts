// Login: Data transfer object. 
export class Login {

    email : String;
    password : String;

    constructor(email:String, password: String){
        this.email = email;
        this.password = password;
    }
}