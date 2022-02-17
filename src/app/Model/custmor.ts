// Custmor: Data transfer object. 
export class Custmor{
    firstName : String;
    lastName : String;
    email : String;
    address : String;
    password : String;

    constructor(firstName : String, lastName : String,  email : String, address : String,   password : String){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.password = password;
    }
}