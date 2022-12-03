let count = 0;
let count2 = 0;
let operator = '+';

const value = document.querySelector('.value');
const value2 = document.querySelector('.value2')
const operation = document.querySelector('.operation')
const calculate = document.querySelector('.calculate')
const clear = document.querySelector('.clear')
const total = document.querySelector('.total')
const btns = document.querySelectorAll('.btn')
const btns2 = document.querySelectorAll('.btn2')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('decrease10')){
            count = count - 10;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('increase10')){
            count = count + 10;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        
        if(count > 0){
            value.style.color = "green";
        }
        
        if(count < 0){
            value.style.color = "red";
        }
        
        if(count == 0){
            value.style.color = "#222";
        }
        
        value.textContent = count;

    });
});

btns2.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count2--;
        }
        else if(styles.contains('decrease10')){
            count2 = count2 - 10;
        }
        else if(styles.contains('increase')){
            count2++;
        }
        else if(styles.contains('increase10')){
            count2 = count2 + 10;
        }
        else if(styles.contains('reset')){
            count2 = 0;
        }

        if(count2 > 0){
            value2.style.color = "green";
        }
        
        if(count2 < 0){
            value2.style.color = "red";
        }
        
        if(count2 == 0){
            value2.style.color = "#222";
        }
        
        value2.textContent = count2;

    });
});

plus.addEventListener('click', function(){
    operator = '+'
    operation.textContent = operator;
});
minus.addEventListener('click', function(){
    operator = '-'
    operation.textContent = operator;
});
multiply.addEventListener('click', function(){
    operator = '*'
    operation.textContent = operator;
});
divide.addEventListener('click', function(){
    operator = '/'
    operation.textContent = operator;
});

calculate.addEventListener('click', function(){
    if (operator == '+') {
        result = count + count2;  
    }  
    else if (operator == '-') {
        result = count - count2;  
    }  
    else if (operator == '*') {
        result = count * count2;  
    }  
    else {
        result = count / count2;
    }

    total.textContent = result
});

clear.addEventListener('click', function(){
    count = 0;
    count2 = 0;
    result = 0;
    value.textContent = count;
    value2.textContent = count2;
    total.textContent = result;
});


