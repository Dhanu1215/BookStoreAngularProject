// Order: Data transfer object. 
export class Order{
    bookId:number;
    userId:number;
    cartId:number;
    quantity: number;
    price : number;
    address : String;

    constructor( bookId:number, userId:number, cartId:number, quantity: number, price : number,  address : String){
        this.bookId = bookId;
        this.userId = userId;
        this.cartId = cartId;
        this.quantity = quantity;
        this.price = price;
        this.address = address;
    }
}