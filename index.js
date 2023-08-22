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

function findnhif() {

    var nhif_contribution = 0;
    // console.log(calcGross)

    if (calcGross() <= 5999) {
        nhif_contribution = 150;
    } else if (calcGross() >= 6000 && calcGross() <= 7999) {
        nhif_contribution = 300;
    } else if (calcGross() >= 8000 && calcGross() < 11999) {
        nhif_contribution = 400;
    } else if (calcGross() >= 12000 && calcGross() <= 14999) {
        nhif_contribution = 500;
    } else if (calcGross() >= 15000 && calcGross() <= 19999) {
        nhif_contribution = 600;
    } else if (calcGross() >= 20000 && calcGross() <= 24999) {
        nhif_contribution = 750;
    } else if (calcGross() >= 25000 && calcGross() <= 29999) {
        nhif_contribution = 850;
    } else if (calcGross() >= 30000 && calcGross() <= 34999) {
        nhif_contribution = 900;
    } else if (calcGross() >= 35000 && calcGross() <= 39999) {
        nhif_contribution = 950;
    } else if (calcGross() >= 40000 && calcGross() <= 44999) {
        nhif_contribution = 1000;
    } else if (calcGross() >= 45000 && calcGross() <= 49999) {
        nhif_contribution = 1100;
    } else if (calcGross() >= 50000 && calcGross() <= 59999) {
        nhif_contribution = 1200;
    } else if (calcGross() >= 60000 && calcGross() <= 69999) {
        nhif_contribution = 1300;
    } else if (calcGross() >= 70000 && calcGross() <= 79999) {
        nhif_contribution = 1400;
    } else if (calcGross() >= 80000 && calcGross() <= 89999) {
        nhif_contribution = 1500;
    } else if (calcGross() >= 90000 && calcGross() <= 99999) {
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
    if (calcGross() < 18000) {
        nssf_contribution =calcGross()* rnssf
    } else if (calcGross() >= 18000) {
        nssf_contribution = 18000 * rnssf

    } else(nssf_contribution = "")

    return (nssf_contribution);
}function thenssf() {
    document.getElementById("nssf1").innerHTML=findnssf()
}
// NHDF
function findnhdf() {
     var rnhdf = 0.03       
    housn = 0
    if (calcGross() <= 83400) {
        housn = calcGross() * rnhdf
    } else {
        housn = 2500
    }

    return housn
}
function thenhdf() {
    document.getElementById("nhdf1").innerHTML=findnhdf()
}

// function findTaxableIncome() {

//     let ti = calcGross() - (findnssf() + findnhdf())
//     return ti
// }
// function theti() {
    
//     document.getElementById("txi1").innerHTML=findTaxableIncome()
//     var taxableIncome=   document.getElementById("txi1").innerHTM
//     console.log(taxableIncome) 
// }
function findTaxableIncome() {
    // Calculate the values
    var gross = calcGross();
    var nssf = findnssf();
    var nhdf = findnhdf();

    // Convert undefined values to 0
    // if (isNaN(gross)) gross = 0;
    // if (isNaN(nssf)) nssf = 0;
    // if (isNaN(nhdf)) nhdf = 0;

    // Calculate the taxable income
    var ti = gross - (nssf + nhdf);

    return ti;
}

function theti() { 
    document.getElementById("txi1").innerHTML = findTaxableIncome();
    // var taxiinc =parseFloat(taxableIncome)
    // console.log(taxiinc)
}
//  PAYE
 function findpayee() {
    var rate1 = 0.25
    var rate2 = 0.3
    var rate3 = 0.35
    var releif = 2400
    
    var x =theti()
    var taxin = theti()
   
    var tax = 0
    

    if ( theti() < 24001) {
        tax = 0
    } else if ( theti()  > 24000 &&  theti()  <= 32333) {
        tax = ((2400 + (theti() - 24000) *  0.25) - 2400 )
    } else if ( theti() > 32333 &&  theti()  < 500001) {
        tax = ((4483.25 + ( theti()  - 32333) * 0.3) - 2400 )
    } else {
        tax = ((144783.25 + ( theti()  - 500000) * 0.35) - 2400 )
    }
    return tax

}
function thepaye() {
    var mypaye = findpayee();
    document.getElementById("paye1").innerHTML= mypaye
}
//  // Net Salary
 function findnetSalary() {
    let net_s = calcGross() - (thenhif() + findnhdf() + findnssf() + thepaye())
    return net_s
}
function thenets() {
    document.getElementById("nets1").innerHTML= findnetSalary()
}
