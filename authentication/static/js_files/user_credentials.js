function change_green(x){
    x.style.backgroundColor = "green";
}
function change_normal(x){
    x.style.backgroundColor = "#f1f1f1";
}
function handleSignup(event) {
    event.preventDefault();
    var email              = document.getElementById('email').value;
      var password           = document.getElementById('password').value;
                  
    var user = {
            email: email,
            password: password,
             };
    
    alert('Signup successful!');
}
function checkpassword(){
    var password = document.getElementById("create_password").value;
    var cpass= document.getElementById("confirm_password").value;
    if (password != cpass) {
        alert("Password does not match");
    }
    getradionews();
}

function getradionews(){
    var option = document.getElementsByName('news');
    for (var i = 0; i < option.length; i++){
        if (option[i].checked) {
            document.getElementById("radio_news").value=option[i].value;
        }
    }
    getradioAT();

}

function getradioAT(){
    var option1 = document.getElementsByName('AT');
    for (var i = 0; i < option1.length; i++){
        if (option1[i].checked) {
            document.getElementById("radio_AT").value=option1[i].value;
        }
    }
    calculate();
}

function calculate(){
                
    var email              = document.getElementById('email').value;
      var password           = document.getElementById('create_password').value;
      var user = {
            email: email,
            password: password,
              };
    localStorage.setItem(email, JSON.stringify(user));
    
    alert('Signup successful!');


    
}







