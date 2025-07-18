function change_green(x){
    x.style.backgroundColor = "green";
}
function change_normal(x){
    x.style.backgroundColor = "#f1f1f1";
}
function handleLogin(){
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;
    var storedUser = localStorage.getItem(loginEmail);
    if (storedUser) {
            var user = JSON.parse(storedUser);
                if (loginPassword === user.password) {
                      alert('Login successful!');
                var newWindow = window.open('file:///C:/Users/hp/OneDrive/Desktop/web/details.html', '_blank');
                newWindow.focus();

                  } 
            else {
                      alert('Incorrect password. Please try again.');
                }		
      } 
    else {
            alert('User not found. Please sign up.');
      }


}