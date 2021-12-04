/*
let oldJs = document.getElementById('oldOne').value;

let newJs = document.getElementById('newOne').value;

let taxJs = document.getElementById('taxOne').value;
*/

function onClickButtonOne(el){
  el.value = (document.getElementById('newOne').value - document.getElementById('oldOne').value)*document.getElementById('taxOne').value;
}

function onClickButtonTwo(el){
  el.value = (document.getElementById('newTwo').value - document.getElementById('oldTwo').value)*document.getElementById('taxTwo').value;
}

function onClickButtonThree(el){
  el.value = (document.getElementById('newThree').value - document.getElementById('oldThree').value)*document.getElementById('taxThree').value;
}


function onClickButtonFour(el){
  el.value = (document.getElementById('newFour').value - document.getElementById('oldFour').value)*document.getElementById('taxFour').value;
}

function onClickButtonSummAll(el){
  el.value = Number(document.getElementById('answerOne').value) + Number(document.getElementById('answerTwo').value) + Number(document.getElementById('answerThree').value) + Number(document.getElementById('answerFour').value);
}