import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient) {}

    //Request to get user data from DB
  getUserdata(){
    return this.http.get("http://localhost:8080/user/getuser");
  }

    //Request to get user data by Id from DB
  getUserById(userID:any){
    return this.http.get("http://localhost:8080/user/get/"+userID);
  }

    //Request to edit user details in DB
  updateUser(urId:number, urDetails:any){
    return this.http.put("http://localhost:8080/user/update/"+urId, urDetails);
  }

    //Request to validate user.
  userLogin(login:any){
    return this.http.post("http://localhost:8080/user/login", login);
  }

    //Request to get all books data from DB
  getAllBooks(){
    return this.http.get("http://localhost:8080/bookstore/getbooks");
  }

    //Request to get book data by id from DB
  getBookById(bookId:number){
    return this.http.get("http://localhost:8080/bookstore/get/" +bookId);
  }

    //Request to get cart data from DB
  getCartDetails(){
    return this.http.get("http://localhost:8080/cart/getcart");
  }

    //Request to create cart data in DB
  addToCart(list:any){
    return this.http.post("http://localhost:8080/cart/addcart", list);
  }

    //Request to get order data from DB
  getOrderDetails(){
    return this.http.get("http://localhost:8080/order/getorders")
  }

    //Request to get book data by bookname from DB
  getBookByName(searchbook:string){
    return this.http.get("http://localhost:8080/getbookByName/" +searchbook);
  }

    //Request to create order data in DB
  placeOrder(order:any){
    return this.http.post("http://localhost:8080/order/addorder" , order);
  }

    //Request to edit cart data in DB
  updateCart(cartId:number,cart:any){
    return this.http.put("http://localhost:8080/cart/update/" +cartId, cart);
  }

    //Request to get cart data by id from DB
  getCartById(cartId:number){ 
    return this.http.get("http://localhost:8080/cart/get/" +cartId);
  }

    //Request to delete cart data from DB
  deleteCart(cartId:number){
    return this.http.delete("http://localhost:8080/cart/remove/" +cartId);
  }

    //Request to create user data in DB
  createUserDetails(person:any){
    return this.http.post("http://localhost:8080/user/adduser", person)
  }
}
