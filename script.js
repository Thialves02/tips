let calculate = document.querySelector('#calculate');

function total(){
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

    //validate
   
    if(totalBill === '' ||totalBill == 0|| tipPercent == 0 || split == 0){
        swal("Please enter a value!", "", "error");
        return;
    }
    if(totalBill <0 || tipPercent < 0 || split < 0){
        swal("Please enter a correct value!", "", "error");
        return;
    }
    //calculate
    let total = (totalBill * tipPercent) / split;
    total = total.toFixed(2);
    
    document.getElementById('tip').innerHTML = total;

}












