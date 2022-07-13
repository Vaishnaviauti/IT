let email;
let password;
let student_name;
let college_name;
let branch;
let Phone_number;
let address;

function account(){
    alert("login successful")
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    student_name=document.getElementById("student_name").value;
    college_name=document.getElementById("college_name").value;
    branch=document.getElementById("branch").value;
    Phone_number=document.getElementById("Phone_number").value;
    address=document.getElementById("address").value;
    document.write("student name: "+student_name );
    document.write("<br>student email: "+email );
    document.write("<br>college name: "+college_name );
    document.write("<br>branch name: "+branch );
    document.write("<br>phone number: "+Phone_number );
    document.write("<br>address:"+address);
}