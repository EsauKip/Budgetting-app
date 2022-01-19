//user interface function for budgeting app
var Name = Number(document.getElementById('budget').value);
var examount = Number(document.getElementById('expenseamount').value);
var balamount = 0;
var money = document.querySelector(".money")

//delete budget function
var del = (element) => {
    examount -= Number(document.getElementById(`expenvl${element}`).innerText);
    document.getElementById('expenseprice').innerText = examount;
    balamount += Number(document.getElementById(`expenvl${element}`).innerText);
    document.getElementById('balanceprice').innerText = balamount;
    document.getElementById(`vl${element}`).innerText = "";
    document.getElementById(`exitem${element}`).innerText = "";
    document.getElementById(`icon${element}`).innerHTML = "";
}