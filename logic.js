let selected_items = [];

function reset(){
    selected_items = [];
}

function sumArray() {
    
    let sum = 0;
  
    for (let i = 0; i < selected_items.length; i += 1) {
      sum += selected_items[i];
    }
    
    return sum;
  }

$("#btn1").click(function btn_1(){
    let btn1_price = 20;
    selected_items.push(btn1_price);
})

$("#btn2").click(function btn_2(){
    let btn2_price = 50;
    selected_items.push(btn2_price);
});
$("#btn3").click(function btn_3(){
    let btn3_price = 35;
    selected_items.push(btn3_price);
});

$("#buy1").click(function main(){
    sumArray();
    window.confirm("Please confirm purchuse of: " + sumArray() + "EUR");
    let payment_method = window.prompt("Please state the payment method","CARD/CASH");
    if(payment_method.toLowerCase() === "card"){
        window.prompt("Please enter CARD number","CARD number");
        window.prompt("Please enter CARD exp date","CARD exp date: xx/yy");
        window.prompt("Please enter CARD CVV","CARD cvv: /xxx");
        window.confirm("You have successfully completed your purchase.");
    } else {
        window.prompt("Enter your home adress for delivery", "X street, XXXX county, Country");
        window.confirm("You will pay for the product in cash upon delivery of the product to your address. Thank you.");
    }
    
    reset();
});

