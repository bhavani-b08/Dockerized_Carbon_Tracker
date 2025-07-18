
function setElectricityFactor() {
    const map = {
        "Coal": 0.95,
        "Renewable": 0.0,
        "Grid Mix": 0.6,
        "Others": 0.4
    };
    const value = document.getElementById("electric_type").value;
    document.getElementById("electricity_factor").value = map[value] ?? '';
}

function setFuelFactor() {
    const map = {
        "Diesel": 2.68,
        "Petrol": 2.31,
        "Natural Gas": 1.96,
        "Others": 2.0
    };
    const value = document.getElementById("fuel_type").value;
    document.getElementById("fuel_factor").value = map[value] ?? '';
}

function setTransportFactor() {
    const map = {
        "Truck": 0.25,
        "Rail": 0.08,
        "Ship": 0.02,
        "Others": 0.1
    };
    const value = document.getElementById("transport_mode").value;
    document.getElementById("transport_factor").value = map[value] ?? '';
}

function setCoalFactor() {
    const map = {
        "High Carbon": 2.5,
        "Medium Carbon": 1.8,
        "Low Carbon": 1.2
    };
    const value = document.getElementById("coal_type").value;
    document.getElementById("coal_emission_factor").value = map[value] ?? '';
}

function setLandFactors() {
    const value = document.getElementById("land_type").value;

    const carbonStockMap = {
        "Forest": 200000,      
        "GrassLand": 80000,
        "Others": 50000
    };

    const rehabRateMap = {
        "Forest": 5000,       
        "GrassLand": 3000,
        "Others": 2000
    };

    document.getElementById("carbon_stock_per_hectare").value = carbonStockMap[value] ?? '';
    document.getElementById("rehab_rate").value = rehabRateMap[value] ?? '';
}
