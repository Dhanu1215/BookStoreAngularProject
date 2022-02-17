// List: Data transfer object. 
export class List {

    bookId : number;
    userId : number;
    quantity : number;
    cartId : number;

    constructor(bookId : number,userId : number, quantity : number,cartId : number){
        this.bookId = bookId;
        this.userId = userId;
        this.quantity = quantity;
        this.cartId = cartId;
    }
}