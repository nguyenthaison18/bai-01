


function doitien() {
  let  amount= document.getElementById("amount").value;
  let Currency  = document.getElementById("currency").value;
  let Currency1  = document.getElementById("currency1").value;
  let a=parseInt(amount);
 if ((Currency=='USD')&&(Currency1=='VND'))
     document.getElementById('ketqua').innerHTML= + a *27000+"VND";
    if ((Currency=='VND')&&(Currency1=='USD'))
        document.getElementById('ketqua').innerHTML= + a / 27000+"USD";


}
