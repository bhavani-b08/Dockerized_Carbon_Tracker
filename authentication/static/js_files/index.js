function show(x){
    const ele = document.getElementsByClassName(x);
    ele[0].style.width = "250px" ;
}

function hide(x){
    const ele = document.getElementsByClassName(x);
    ele[0].style.width = "0px" ;
}
function opensignin(){
    window.open("sign_in.html","_blank");		
}