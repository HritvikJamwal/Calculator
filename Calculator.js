var txtbox = document.getElementById('txtbox');
var AC = document.getElementById('ACbtn');
var percent = document.getElementById('percent');
var pm = document.getElementById('chg-sign');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var three = document.getElementById('three');
var two = document.getElementById('two');
var one = document.getElementById('one');
var zero = document.getElementById('large-btn');
var equals = document.getElementById('equals');
var decimal = document.getElementById('decimal');
var opr = 0;
var oprno;
var n1;

function clear(){
    txtbox.innerHTML = "";
    opr = 0;
}

function clearo(){
    txtbox.innerHTML = "";

}

AC.addEventListener('click', clear);                //AC btn



//+/- button
pm.addEventListener('click', function(){
    txtbox.innerHTML = String(-1 * Number(txtbox.innerHTML));
})

//Percent button
percent.addEventListener('click', function(){
    if(opr)
    {console.log('opr present')}
    else if(txtbox.innerHTML != ""){
    n1 = txtbox.innerHTML;     
    oprno = 5;
    console.log('opr not present');
    opr = 1;
    clearo();
    history.innerHTML = n1 + " % of";
    }
})
//Divide button
divide.addEventListener('click', function(){    
    if(opr ==1)
    {console.log('opr present')}
    else if(txtbox.innerHTML != ""){
    n1 = txtbox.innerHTML;    
    oprno = 4;
    console.log('opr not present');
    opr = 1;
    clearo();
    history.innerHTML = n1 + " /";
    }
});       

// Multiply button
multiply.addEventListener('click', function(){    
    if(opr)
    {console.log('opr present')}
    else if(txtbox.innerHTML != ""){
    n1 = txtbox.innerHTML;    
    txtbox.innerHTML = txtbox.innerHTML + "*";
    oprno = 3;
    console.log('opr not present');
    opr = 1;
    clearo();
    history.innerHTML = n1 + " *";
    }
});   

// Add button
add.addEventListener('click', function(){    
    if(opr)
    {console.log('opr present')}
    else if(txtbox.innerHTML != ""){
    n1 = txtbox.innerHTML;    
    oprno = 1;
    console.log('opr not present');
    opr = 1;
    clearo();
    history.innerHTML = n1 + " +";
    }
});   

// Subtract button
subtract.addEventListener('click', function(){    
    if(opr)
    {console.log('opr present')}
    else if(txtbox.innerHTML != ""){
    n1 = txtbox.innerHTML;    
    txtbox.innerHTML = txtbox.innerHTML + "-";
    oprno = 2;
    console.log('opr not present');
    opr = 1;
    clearo();
    history.innerHTML = n1 + " -";
    }
});   

// Adding no. buttons below

seven.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + "7";
});
eight.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + "8";
});
nine.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + "9";
});
four.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + "4";
});
five.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + "5";
});
six.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + "6";
});
three.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + "3";
});
two.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + "2";
});
one.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + "1";
});
zero.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + "0";
});
//Decimal button
decimal.addEventListener('click', function(){
    txtbox.innerHTML = txtbox.innerHTML + ".";
});

//Equals button
equals.addEventListener('click', function(){
    if(oprno == 1){
        txtbox.innerHTML =Number(n1) + Number(txtbox.innerHTML);
    }
    else if(oprno == 2){
        txtbox.innerHTML = Number(n1) - Number(txtbox.innerHTML);
    }
    else if(oprno == 3){
        txtbox.innerHTML = Number(n1) * Number(txtbox.innerHTML);
    }
    else if(oprno == 4 && txtbox.innerHTML == "0"){
        txtbox.innerHTML = "Error";
    }
    else if(oprno == 4){
        txtbox.innerHTML = Number(n1) / Number(txtbox.innerHTML);
    }
    else if(oprno ==5){
        txtbox.innerHTML = (Number(n1))/100 * Number(txtbox.innerHTML);
    }
    else if(txtbox.innerHTML ==""){

    }
    opr =0;
});

