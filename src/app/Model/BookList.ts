// BookList : Data transfer object
export class BookList {

     bookName : String ;
	 bookDescription : String;
	 authorName :  String ;
	 bookImg : String;
	 price : number;
	 quantity : number;

    constructor(bookName:String, bookDescription : String, authorName :  String, bookImg : String, price : number, quantity : number){
        this.bookName = bookName;
        this.bookDescription = bookDescription;
        this.authorName = authorName;
        this.bookImg = bookImg;
        this.price = price;
        this.quantity = quantity;
    }
}