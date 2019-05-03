const item ={
    "name":"Avocado",
    "type":"Fruit",
    "category":"Food",
    "price":200
}

function applyCoupon(item) {
    let temp = item;
    return (percent)=>{
        temp.price = temp.price - temp.price * percent/100;
        return temp;

    }
}

console.log(applyCoupon(item)(10).price);