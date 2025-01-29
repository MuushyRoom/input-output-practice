
let numInput1 = document.getElementById('firstnumInputProj1');
let numInput2 = document.getElementById('secondnumInputProj1');


function checkInput(){
    let num1 = parseInt(numInput1.value);
let num2 = parseInt(numInput2.value);
    if(numInput1.value === '' || numInput2.value === '' || typeof num1 !== 'number' || typeof num2 !== 'number'){
        alert('Please enter a number');
    }
}

function addNum(){
  

   if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    alert('Please enter a number');
   

   }else{
 
    let sum = num1 + num2;
 
    document.getElementById('proj1Result').value = sum;
   }

  
}

function clearText(){
    document.getElementById('firstnumInputProj1').value = '';
    document.getElementById('secondnumInputProj1').value = '';
   
    document.getElementById('proj1Result').value = '';
}