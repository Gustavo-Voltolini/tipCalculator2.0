function update() {
    const bill = Number(document.getElementById('bill').value);
    const personEach = Number(document.getElementById('personEach').value);
}

document.getElementById('custom').addEventListener('input', function() {
    calcular(Number(this.value)); 
});
var inputBill = document.querySelector(".inputBill")
var inputPerson = document.querySelector(".inputPerson")
function calcular(porcentagem) {
    const bill = Number(document.getElementById('bill').value);
    const personEach = Number(document.getElementById('personEach').value);

    if (isNaN(bill) || bill === 0) {
       
        document.getElementById('alertVazio2').innerHTML="Can't be zero"
        inputBill.style.border="1px solid red";
        
    } else if (isNaN(personEach) || personEach === 0) {
        document.getElementById("alertVazio1").innerHTML="Can't be zero";
        inputPerson.style.border="1px solid red";
        
    } else {
        document.getElementById('alertVazio2').innerHTML=""
        document.getElementById("alertVazio1").innerHTML="";
        inputBill.style.border="";
        inputPerson.style.border="";
        let totalTip = bill * (porcentagem / 100);
        let totalTipPerson = totalTip / personEach;
        document.querySelector('.resultTip').innerHTML = '$' + totalTipPerson.toFixed(2);
        let totalBill = totalTip + bill;
        let billPersonEach = totalBill / personEach;
        document.querySelector('.resultPerson').innerHTML = '$' + billPersonEach.toFixed(2);
    }
}

document.querySelector(".reset").addEventListener ("click",function(){
    function reset(){

    }
})

function reset (){
    document.getElementById('bill').value ='';
    document.getElementById('personEach').value = '';
    document.querySelector('.resultTip').innerHTML='$0.00'
    document.querySelector('.resultPerson').innerHTML = '$0.00'
}
