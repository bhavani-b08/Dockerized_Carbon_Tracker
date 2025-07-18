function show(x){
    const ele = document.getElementsByClassName(x);
    ele[0].style.width = "250px" ;
}

function hide(x){
    const ele = document.getElementsByClassName(x);
    ele[0].style.width = "0px" ;
}
function openlink(){
    window.open("file:///C:/Users/hp/OneDrive/Desktop/web/sign%20in.html","_blank");		
}

function change_color(x) {
x.style.backgroundColor = "lightgray";	
}
function back_normal(x) {
x.style.backgroundColor = "#f1f1f1";
}

// Function to predict values from 2024 onwards (example: linear regression)
function predictValues() {
// Historical data (training data)
var historicalData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    values: [10, 12, 14, 16, 15, 14, 18, 20, 22]
};

var x = historicalData.labels.map(year => parseInt(year)); // Convert labels to numbers
var y = historicalData.values;

// Linear regression function (example)
function linearRegression(x, y) {
    var n = x.length;
    var sumX = x.reduce((acc, val) => acc + val, 0);
    var sumY = y.reduce((acc, val) => acc + val, 0);
    var sumXY = x.map((val, i) => val * y[i]).reduce((acc, val) => acc + val, 0);
    var sumXSquare = x.map(val => val * val).reduce((acc, val) => acc + val, 0);

    var slope = (n * sumXY - sumX * sumY) / (n * sumXSquare - sumX * sumX);
    var intercept = (sumY - slope * sumX) / n;

    // Predict values for years from 2024 onwards
    var futureYears = ['2024', '2025', '2026', '2027', '2028'];
    return futureYears.map(year => slope * parseInt(year) + intercept);
}

return linearRegression(x, y);
}

// Ensure the chart is initialized after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
var ctx = document.getElementById('myChart').getContext('2d');

// Get predicted data
var predictedValues = predictValues();

// Chart configuration
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
        datasets: [{
            label: 'Carbon Footprint',
            data: [10, 12, 14, 16, 15, 14, 18, 20, 22, ...predictedValues], // Include predicted values here
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                    color: '#1D2E28'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Carbon Footprint',
                    color: '#1D2E28'
                }
            }
        }
    }
});
});