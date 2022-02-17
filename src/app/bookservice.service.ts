import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient) {}

  getUserdata(){
    return this.http.get("http://localhost:8080/user/getuser");
  }

  getUserById(userID:any){
    return this.http.get("http://localhost:8080/user/get/"+userID);
  }

  updateUser(urId:number, urDetails:any){
    return this.http.put("http://localhost:8080/user/update/"+urId, urDetails);
  }

  userLogin(login:any){
    return this.http.post("http://localhost:8080/user/login", login);
  }

  getAllBooks(){
    return this.http.get("http://localhost:8080/bookstore/getbooks");
  }

  getBookById(bookId:number){
    return this.http.get("http://localhost:8080/bookstore/get/" +bookId);
  }

  getCartDetails(){
    return this.http.get("http://localhost:8080/cart/getcart");
  }

  addToCart(list:any){
    return this.http.post("http://localhost:8080/cart/addcart", list);
  }

  getOrderDetails(){
    return this.http.get("http://localhost:8080/order/getorders")
  }

  getBookByName(bookList:any){
    return this.http.get("http://localhost:8080/getbook" + bookList.bookName)
  }

  placeOrder(order:any){
    return this.http.post("http://localhost:8080/order/addorder" , order);
  }

  updateCart(cartId:number,cart:any){
    console.log(cart);
    
    return this.http.put("http://localhost:8080/cart/update/" +cartId, cart);
  }

  getCartById(cartId:number){ 
    return this.http.get("http://localhost:8080/cart/get/" +cartId);
  }

  deleteCart(cartId:number){
    return this.http.delete("http://localhost:8080/cart/remove/" +cartId);
  }
}
