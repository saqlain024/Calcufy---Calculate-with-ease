var buttons = document.getElementsByClassName("buttons");
var display = document.getElementById("display");

var operand1 = '';
var operand2 = '';
var operator = '';

function calc(value){
    let result = eval(value);
    // console.log(result);
    return result;
}

for(let i=0; i<buttons.length; i++){

    buttons[i].addEventListener('click', function(){
       var value=this.getAttribute('data-value');

       if(value  == '='){
        let ans = calc(display.innerText);
        display.innerText = ans;
       }
       else if(value == 'c'){
        display.innerText = '';
       }
       else{
        display.innerText += value;
       }


        // if(value == '+'){
        //     operator = '+';
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText += '+';
        //     display.innerText = '';
            
        // }
        // else if(value == '-'){
        //     operator = '-';
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText += '-';
        //     display.innerText = '';
        // }
        // else if(value == '*'){
        //     operator = '*';
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText += '*';
        //     display.innerText = '';
        // }
        // else if(value == '/'){
        //     operator = '/';
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText += '/';
        //     display.innerText = '';
        // }
        // else if( value == '='){
        //     operand2 = parseFloat(display.textContent);
        //     let result = eval(operand1 +" "+operator+" "+operand2);
        //     display.innerText = result;
        //     operand1 = result;
        //     operand = null;
        // }
        // else if( value == 'c'){
        //     display.innerText = '';
        //     operand1 = null;
        //     operand2 = null;
        // }
        // else{
        //     display.innerText += value;
        // }

    });
}