var myform = document.getElementById("myform");
myform.addEventListener("submit",
    function getdata (e) {
        e.preventDefault();
        if (document.getElementById("amount1").value.length == 0 || document.getElementById("amount2").value.length == 0) {
            document.getElementById("error").innerText = "Ensure all fields are set"

        } else {
            document.getElementById("error").innerText = ""
        
        let basicsalary= Number(document.getElementById("amount1").value);
        let benefits = Number(document.getElementById("amount2").value);

        // console.log(basicsalary)
        let mygrosssalary = findgross( basicsalary,benefits);
        document.getElementById("gs1").innerHTML = mygrosssalary

        let mynhif = findnhif(mygrosssalary);
        document.getElementById("nhif1").innerHTML = mynhif
        
        let mynssf = findnssf(mygrosssalary);
        document.getElementById("nssf1").innerHTML =mynssf

        let mynhdf = findnhdf(mygrosssalary);
        document.getElementById("nhdf1").innerHTML = mynhdf


        let mytaxableincome = findtaxableincome(mygrosssalary,mynhdf,mynssf);
        document.getElementById("txi1").innerHTML = mytaxableincome

        
        
        let mypaye = findpaye(mytaxableincome);
        document.getElementById("paye1").innerHTML = mypaye.toFixed(2)

        
        let mynetsalary = findnetsalary(mygrosssalary,mynhif,mynssf,mynhdf,mypaye);
        document.getElementById("nets1").innerHTML = mynetsalary


    }});

    function findgross( basicsalary,benefits) {
        gross = basicsalary + benefits
        return gross
    }


    function findnhif(mygrosssalary) {
        let nhif_contribution = 0;

        if (mygrosssalary <= 0 ) {
            nhif_contribution = 0;
        } else if (mygrosssalary > 0 && mygrosssalary<= 5999) {
            nhif_contribution = 150;
        } else if (mygrosssalary >= 6000 && mygrosssalary <= 7999) {
            nhif_contribution = 300;
        } else if (mygrosssalary >= 8000 && mygrosssalary < 11999) {
            nhif_contribution = 400;
        } else if (mygrosssalary >= 12000 && mygrosssalary <= 14999) {
            nhif_contribution = 500;
        } else if (mygrosssalary >= 15000 && mygrosssalary <= 19999) {
            nhif_contribution = 600;
        } else if (mygrosssalary >= 20000 && mygrosssalary <= 24999) {
            nhif_contribution = 750;
        } else if (mygrosssalary >= 25000 && mygrosssalary <= 29999) {
            nhif_contribution = 850;
        } else if (mygrosssalary >= 30000 && mygrosssalary <= 34999) {
            nhif_contribution = 900;
        } else if (mygrosssalary >= 35000 && mygrosssalary <= 39999) {
            nhif_contribution = 950;
        } else if (mygrosssalary >= 40000 && mygrosssalary <= 44999) {
            nhif_contribution = 1000;
        } else if (mygrosssalary >= 45000 && mygrosssalary <= 49999) {
            nhif_contribution = 1100;
        } else if (mygrosssalary >= 50000 && mygrosssalary <= 59999) {
            nhif_contribution = 1200;
        } else if (mygrosssalary >= 60000 && mygrosssalary <= 69999) {
            nhif_contribution = 1300;
        } else if (mygrosssalary >= 70000 && mygrosssalary <= 79999) {
            nhif_contribution = 1400;
        } else if (mygrosssalary >= 80000 && mygrosssalary <= 89999) {
            nhif_contribution = 1500;
        } else if (mygrosssalary >= 90000 && mygrosssalary <= 99999) {
            nhif_contribution = 1600;
        } else {
            nhif_contribution = 1700;
        }
        return nhif_contribution
    }
    function findnssf(mygrosssalary,rnssf = 0.06){ 
        let nssf_contribution = 0
        if (mygrosssalary < 18000) {
            nssf_contribution = mygrosssalary *  0.06
        } else if (mygrosssalary >= 18000) {
            nssf_contribution = 18000 * 0.06

        } else(nssf_contribution = "")

        return nssf_contribution;
    }
    function findnhdf(mygrosssalary,rnhdf = 0.03) {
            
        nhdf_contribution = 0
        if (mygrosssalary < 83334) {
            nhdf_contribution = mygrosssalary * 0.03
        } else {
            nhdf_contribution = 2500
        }

        return nhdf_contribution
    }

    
    // Taxable income

    function findtaxableincome(mygrosssalary, mynssf,mynhdf) {
        let ti =  mygrosssalary- (mynssf + mynhdf)
        return ti
    }
    // PAYE
    function findpaye(mytaxableincome) {

        tax = 0

        if (mytaxableincome < 24001) {
            tax = 0
        } else if (mytaxableincome > 24000 && mytaxableincome <= 32333) {
            tax = ((2400 + (mytaxableincome - 24000) * 0.25) - 2400)
        } else if (mytaxableincome > 32333 && mytaxableincome < 500001) {
            tax = ((4483.25 + (mytaxableincome - 32333) * 0.3) - 2400)
        } else if (mytaxableincome > 500000 && mytaxableincome < 800001) {
            tax = ((144783.25 + (mytaxableincome - 500000) * 0.325) - 2400)
        }else {
            tax = (( 242283.35+ (mytaxableincome - 800000) * 0.35) - 2400)
        }
        return tax

        
    }

    function  findnetsalary(mygrosssalary,mynhif,mynhdf,mynssf,mypaye) {
        let net_s = mygrosssalary - (mynhif + mynhdf + mynssf + mypaye)
        return net_s
    }

    

 

