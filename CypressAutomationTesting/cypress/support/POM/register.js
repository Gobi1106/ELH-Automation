let newStr, arryr, hob1, hob2, res, arrmonth, resmon, daysub, newString, str, booleanpwd, booleanconfirm;
class register {

    elements = {
        fname: () => cy.get('[ng-model="FirstName"]'),
        lname: () => cy.get('[ng-model="LastName"]'),
        address: () => cy.get('[ng-model="Adress"]'),
        email: () => cy.get('[type="email"]'),
        phno: () => cy.xpath('//input[@type="tel"]')
    }



    typefirstname(namefirst) {
        cy.log(namefirst)
        cy.log("---------")
        cy.reload()
        this.elements.fname().type(namefirst)
        const map = new Map([["firstname", "srini"]]);
        cy.log(map.values("srini"))
        for (let [key, value] of map) {
            cy.log(key + " " + value)
        }
    }

    typelastname(namelast) {
        this.elements.lname().type(namelast)
    }

    typeaddress() {
        this.elements.address().type(userADDRESS())
        function userADDRESS() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < possible.length; i++) {
                text += possible.charAt(Math.round(Math.random() * possible.length));
            }
            return text;
        }
    }

    typeemail() {
        this.elements.email().type(userEMAILID() + "@gmail.com")
        function userEMAILID() {
            var emailval = "";
            var emailChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            for (var i = 0; i < 6; i++) {
                emailval += emailChar.charAt(Math.ceil(Math.random() * emailChar.length))
            }
            return emailval;
        }
        cy.screenshot("typeEmail method passed")
    }

    typephno() {
        this.elements.phno().type(userPH())
        function userPH() {
            var val = "";
            var no = "0123456789"
            for (var i = 0; i < no.length; i++) {
                val += no.charAt(Math.floor(Math.random() * no.length))
            }
            return val
        }

    }

    typegender(gender) {
        cy.get('[value="' + gender + '"]').click()
        cy.screenshot("Gender method passed")

    }
    typehobbies(hobbies1, hobbies2) {
        cy.log(hobbies1)
        hob1 = hobbies1.replace(/"+/g, "");
        hob2 = hobbies2.replace(/"+/g, "");
        cy.log(hob1)

        cy.get('[value="' + hob1 + '"]').should('not.be.checked').click()
        cy.get('[value="' + hob2 + '"]').should('not.be.checked').click()
    }
    typeselectCountry(selectCountry) {
        cy.get('#country[tabindex="-1"]>option').invoke('text').then((selcountry) => {
            cy.log(selcountry)
            let abc = selcountry.replace(/\n/g, " ");
            cy.log(abc)
        })
    }
    typeyear(year, substryear) {
        cy.get('#yearbox>option').invoke('text').then(function (yr) {
            cy.log(yr.includes("2002"))
            cy.log(yr.search('1997'))
            newStr = yr.substring(substryear)
            cy.log(newStr)
            arryr = newStr.match(/.{1,4}/g)
            res = arryr.find(arrelement => arrelement == (year))
            cy.log(res)
            cy.get('#yearbox').select(res)
        })
    }

    typemonth(month) {
        cy.get("[placeholder='Month']>option").invoke('text').then((mon) => {
            cy.log(mon.charAt(4))
            cy.log(mon.startsWith("Month"))
            cy.log(mon.endsWith("December"))
            arrmonth = mon.match(/[A-Z][a-z]+/g)
            cy.log(arrmonth.shift())
            resmon = arrmonth.find(arrelement => arrelement == (month))
            cy.get("[placeholder='Month']").select(resmon)
        })
    }
    typeday() {
        cy.get("#daybox>option").invoke('text').then((day) => {
            daysub = day.substring(4);
            newString = daysub.trim();
            cy.log(newString)
            str = newString.split('');
            cy.log(str)
            str.forEach((element, index, arr) => {
                cy.log(element)
            });
        })
    }

    typepassword(password) {
        booleanpwd = password.match(/\W/g)
        cy.log(booleanpwd)

        if (booleanpwd == "!" || booleanpwd == "$" || booleanpwd == "^") {
            cy.get('#firstpassword').type(password)
        }
        else {
            cy.log("Need to use special characters for password")
        }
    }

    typeConfirmPassword(confirmpwd) {
        booleanconfirm = confirmpwd.match(/\W/g)
        cy.log(booleanconfirm)
        if (booleanconfirm == "!" || booleanconfirm == "$" || booleanconfirm == "^") {
            cy.xpath('//input[starts-with(@id,"secondpass")]').type(confirmpwd)
        }
        else {
            cy.log("Need to use special characters for confirmpassword")
        }
    }
    randomDate() {
        cy.get("input#datepicker1").
            click().type(getdate(), { force: true })
        function getdate() {
            var someDate = new Date();
            var numberOfDaysToAdd = 3;
            someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
            var dd = someDate.getDate();
            var mm = someDate.getMonth() + 1; //January is 0!
            var yyyy = someDate.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }
            var today = mm + '/' + dd + '/' + yyyy;
            return today

        }
    }

}
module.exports = new register();