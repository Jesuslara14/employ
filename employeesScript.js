class Employee{
    constructor(Fname, Lname, age, address, country, province, city, zipcode){
        this.Fname = Fname;
        this.Lname = Lname;
        this.age = age;
        this.address = address;
        this.country = country;
        this.province = province;
        this.city = city;
        this.zipcode = zipcode;
    }

    createEmployees(){
        console.log("Employee Info: " + this.Fname);
    }
}

class Detailed extends Employee{
    constructor(Fname, jobTitle, dept){
        super(Fname);
        this.jobTitle = jobTitle;
        this.dept = dept;
    }

    createDetails(){
        console.log(this.Fname + " is " + this.jobTitle + " at the " + this.dept + " department");
    }

    displayDetails(){
        var empDetails = [
            document.getElementById('fname'),
            document.getElementById('title'),
            document.getElementById('dept'),
            document.getElementById('age'),
            document.getElementById('province'),
            document.getElementById('address'),
        ];

        console.log(empDetails);
        var newElment = document.createElement("div");
        var detailsString = "";
        for(var i = 0; i < empDetails.length; i++){
            detailsString = detailsString + empDetails[i].id + ": " + empDetails[i].value + "<br>";
        }
        newElment.innerHTML = detailsString;
        newElment.className = "object";
        document.getElementById("page").appendChild(newElment);
    }
}


document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();
    var emp = new Detailed(document.getElementById("fname").value, document.getElementById("title").value, document.getElementById("dept").value);
    emp.displayDetails();
});
