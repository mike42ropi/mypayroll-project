var myform = document.getElementById("myform");
myform.addEventListener("submit",
    function (e) {
        e.preventDefault();
        if (document.getElementById("amount1").value.length == 0 || document.getElementById("amount2").value.length == 0) {
            document.getElementById("error").innerText = "Ensure all fields are set"

        } else {
            document.getElementById("error").innerText = ""
        }
    });

// NHIF
    
function calcGross() {
    
    var amount1 = Number(document.getElementById("amount1").value)
    var amount2 =Number(document.getElementById("amount2").value)
    // console.log(amount1 + amount2 )
    // console.log(amount2)
    var gross_salary = Number(amount1) + Number(amount2) ;
    // console.log(total)
    return gross_salary;
}
function thegross() {
    document.getElementById("gs1").innerHTML=calcGross()
}
// let totalgross=calcGross(); 
// console.log(totalgross)  

function findnhif(calcGross) {

    var nhif_contribution = 0;

    if (calcGross <= 5999) {
        nhif_contribution = 150;
    } else if (calcGross >= 6000 && calcGross <= 7999) {
        nhif_contribution = 300;
    } else if (calcGross >= 8000 && calcGross < 11999) {
        nhif_contribution = 400;
    } else if (calcGross >= 12000 && calcGross <= 14999) {
        nhif_contribution = 500;
    } else if (calcGross >= 15000 && calcGross <= 19999) {
        nhif_contribution = 600;
    } else if (calcGross >= 20000 && calcGross <= 24999) {
        nhif_contribution = 750;
    } else if (calcGross >= 25000 && calcGross <= 29999) {
        nhif_contribution = 850;
    } else if (calcGross >= 30000 && calcGross <= 34999) {
        nhif_contribution = 900;
    } else if (calcGross >= 35000 && calcGross <= 39999) {
        nhif_contribution = 950;
    } else if (calcGross >= 40000 && calcGross <= 44999) {
        nhif_contribution = 1000;
    } else if (calcGross >= 45000 && calcGross <= 49999) {
        nhif_contribution = 1100;
    } else if (calcGross >= 50000 && calcGross <= 59999) {
        nhif_contribution = 1200;
    } else if (calcGross >= 60000 && calcGross <= 69999) {
        nhif_contribution = 1300;
    } else if (calcGross >= 70000 && calcGross <= 79999) {
        nhif_contribution = 1400;
    } else if (calcGross >= 80000 && calcGross <= 89999) {
        nhif_contribution = 1500;
    } else if (calcGross >= 90000 && calcGross <= 99999) {
        nhif_contribution = 1600;
    } else {
        nhif_contribution = 1700;
    }
    return nhif_contribution
}
function thenhif() {
    document.getElementById("nhif1").innerHTML=findnhif()
}
 // NSSF
 function findnssf() {
    var rnssf = 0.06
    var nssf_contribution = 0
    if (calcGross < 18000) {
        nssf_contribution =calcGross* rnssf
    } else if (calcGross >= 18000) {
        nssf_contribution = 18000 * rnssf

    } else(nssf_contribution = "y")

    return (nssf_contribution);
}function thenssf() {
    document.getElementById("nssf1").innerHTML=findnssf()
}