var cartObj= [];
var cartString:any= [];
var total = 0;
var obj = 0;



function Item(item:string,price:number) {
    this.item = item; 
    this.price = price;
}


function myCart(item:string,price:number){
    console.log(item);
    console.log(price);
    let data = new Item(item,price);
    
    cartObj.push(data);
    cartString = JSON.stringify(cartObj);
    storeInSession();    
    document.getElementById("cart").innerHTML= "cart "+ (cartObj.length);
    
}



function storeInSession() {
    sessionStorage.setItem("cartInfo", cartString);
}


function retrieveFromSession()
{
    let stringfied = sessionStorage.getItem("cartInfo");
    let data = JSON.parse(stringfied);
    for(let i = 0; i<data.length; i++){
        inserNewItem(data[i]);
    }
    var table = document.getElementById("itemList");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    cell1.style.textAlign = "right";
    cell1.innerHTML = "total Price:";
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = String(total.toFixed(2));
}


function inserNewItem(data:any){
    let table = document.getElementById("itemList");
    let body = table.getElementsByTagName("tbody")[0];
    console.log(data);
    var newRow = body.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.item;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.price;
    total = total + Number(data.price); 
}


