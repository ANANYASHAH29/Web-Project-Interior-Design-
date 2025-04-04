function chk_email()
{
let ml = document.getElementById("email").value;
let pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/; ///^[a-z][a-z0-9_]+@[.][a-z]{2,8}[.][a-z]{2,3}/i;
let vld = pattern.test(ml);
if(vld == true)
    alert("Email is valid! Check your mail for regular updates!");
else
    alert("Email is invalid! Please enter a valid email.");
}