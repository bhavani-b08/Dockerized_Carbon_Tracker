function change_green(x) {
    x.style.backgroundColor = "green";
}

function change_normal(x) {
    x.style.backgroundColor = "#f1f1f1";
}

function getradionews() {
    var option = document.getElementsByName('news');
    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            document.getElementById("radio_news").value = option[i].value;
        }
    }
    getradioAT();
}

function getradioAT() {
    var option1 = document.getElementsByName('AT');
    for (var i = 0; i < option1.length; i++) {
        if (option1[i].checked) {
            document.getElementById("radio_AT").value = option1[i].value;
        }
    }
    calculate();
}

function calculate() {
    let data = 0;
    let news_data = 0;
    let AT_data = 0;
    let eb = parseFloat(document.getElementById("eb").value);
    let gas = parseFloat(document.getElementById("gas").value);
    let oil = parseFloat(document.getElementById("oil").value);
    let mileage = parseFloat(document.getElementById("mil").value);
    let frl = parseFloat(document.getElementById("4rl").value);
    let frm = parseFloat(document.getElementById("4rm").value);
    var news = document.getElementById("radio_news").value;
    var AT = document.getElementById("radio_AT").value;
    if (news === "No") {
        data = data + 184;
        news_data = 184;
    }
    if (AT === "No") {
        data = data + 166;
        AT_data = 166;
    }
    let ans = (eb * 105) + (gas * 105) + (oil * 113) + (mileage * 0.79) + (frl * 1100) + (frm * 4400) + data;

    let energy_consumption = (((eb * 105) + (gas * 105) + (oil * 113)) / ans) * 100;
    let transportation = (((mileage * 0.79) + (frl * 1100) + (frm * 4400)) / ans) * 100;
    let land_filling = ((news_data + AT_data) / ans) * 100;


    var url='fp_track.html?energy_consumption='+encodeURIComponent(energy_consumption)+'&transportation='+encodeURIComponent(transportation)+'&land_filling='+encodeURIComponent(land_filling)+'&carbonFootprint='+encodeURIComponent(ans);
var newWindow = window.open(url, '_blank');
newWindow.focus();

}