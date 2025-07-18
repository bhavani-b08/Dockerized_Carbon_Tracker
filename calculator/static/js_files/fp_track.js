function change_color(x){
    x.style.backgroundColor = "lightgray";	
}
function back_normal(x){
    x.style.backgroundColor = " #f1f1f1";
}
document.addEventListener('DOMContentLoaded', function() {
    
    const urlParams         = new URLSearchParams(window.location.search);
    const energy_consumption= urlParams.get('energy_consumption');
    const transportation    = urlParams.get('transportation');
    const land_filling      = urlParams.get('land_filling');
    const carbonFootprint   = urlParams.get('carbonFootprint');
    

    document.getElementById("energy_consumption").value   =energy_consumption;
    document.getElementById("transportation").value       =transportation;
    document.getElementById("land_filling").value         =land_filling;
    document.getElementById("carbonFootprint").value     =carbonFootprint;
    percentage();
});
function percentage(){
    
    const color_energy  =	parseFloat(document.getElementById("energy_consumption").value);			
    const color_trans   =	parseFloat(document.getElementById("transportation").value);
    const color_land    =	parseFloat(document.getElementById("land_filling").value);
    let en_color=(Number(color_energy)/100)*600;
    
    document.getElementById("ener_color").style.width = en_color.toString()+"px";
    document.getElementById("ener_color").style.backgroundColor ="#88B8BD";
    
    let tr_color=(Number(color_trans)/100)*600;
    
    document.getElementById("trans_color").style.width = tr_color.toString()+"px";
    document.getElementById("trans_color").style.backgroundColor ="#88B8BD";
    
    let ld_color=(Number(color_land)/100)*600;
    
    
    document.getElementById("land_color").style.width = ld_color.toString()+"px";
    document.getElementById("land_color").style.backgroundColor ="#88B8BD";
    suggestion();
}

function suggestion(){
    const color_energy  =	document.getElementById("energy_consumption").value;			
    const color_trans   =	document.getElementById("transportation").value;
    const color_land    =	document.getElementById("land_filling").value;
    let en_color=(Number(color_energy)/100)*600;
    let tr_color=(Number(color_trans)/100)*600;
    let ld_color=(Number(color_land)/100)*600;
    var ener_ul=document.getElementById("ener_point");
    var trans_ul=document.getElementById("trans_point");
    var land_ul=document.getElementById("land_point");
    ener_ul.innerHTML = '';
    trans_ul.innerHTML = '';
    land_ul.innerHTML = '';
    var ener_values=[""];
    var trans_values=[""];
    var land_values=[""];
    if (en_color>=0 && en_color<=150){
        ener_values = ['Reduce burning fossil fuels in Power plants which  emit CO2, making electricity consumption a major contributor to carbon emissions.', 'reduce the Energy consumption in homes for heating, cooling, lighting, and appliances', 'Improving energy efficiency in appliances  reduces overall energy consumption and lowers emissions per unit of output.'];
    }
    if(en_color>=151 && en_color<=300){
        ener_values = ['Advances in clean energy technologies (e.g., solar panels, wind turbines, energy storage) help reduce reliance on fossil fuels and emissions.', 'Energy use in commercial buildings, offices, and retail spaces for heating, cooling, lighting, and operations affects energy consumption and emissions.', 'Try  to reduce the relies on fossil fuels (coal, oil, natural gas), which release carbon dioxide (CO2) when burned.'];
    }
    if(en_color>=301 && en_color<=450){
        ener_values = ['reduce the energy consumption in Heavy industries such as steel, cement, and chemicals consume.', 'increasing adoption of renewable energy sources (solar, wind, hydro, geothermal) aims to reduce carbon emissions from energy production.', 'Urban areas with higher energy demands per capita contribute significantly to carbon emissions due to population density and economic activities.'];
    }
    if(en_color>=451 && en_color<=600){
        ener_values = ['Government policies such as carbon pricing, renewable energy targets, and energy efficiency standards influence energy consumption patterns and emissions reductions.', 'Global trade and energy consumption patterns affect emissions across borders, highlighting the interconnectedness of energy use and environmental impacts.', 'increasing adoption of renewable energy sources (solar, wind, hydro, geothermal) aims to reduce carbon emissions from energy production.'];
    }
    ener_values.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        ener_ul.appendChild(li);
    });
    if (tr_color>=0 && tr_color<=150){
        trans_values = ['Restrict high-emission vehicles in certain urban areas to improve air quality.', 'Advocate for and support the development of safe and convenient infrastructure for walking and cycling', 'construct an infrastructure for cyclists and pedestrians to promote sustainable transport options.'];
    }
    if(tr_color>=151 && tr_color<=300){
        trans_values = ['Incentivize the adoption of electric vehicles to reduce reliance on fossil fuels.', 'improve and expand public transportation systems.', 'Opt for high-efficiency modes of transport such as high-speed vehicles'];
    }
    if(tr_color>=301 && tr_color<=450){
        trans_values = ['Incentivize the adoption of hybrid vehicles to reduce reliance on fossil fuels.', 'Encourage sharing rides to reduce the number of vehicles on the road.', 'Walk or bike for short distances instead of driving, promoting both personal health and reducing carbon footprint.'];

    }
    if(tr_color>=451 && tr_color<=600){
        trans_values = ['Encourage the use of fuel-efficient vehicles and technologies.', 'Research and develop biofuels, hydrogen, and other renewable energy sources for transportation.', 'Inform the public about the environmental impact of transportation choices and encourage sustainable practices.'];

    }
    trans_values.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        trans_ul.appendChild(li);
    });
    if (ld_color>=0 && ld_color<=150){
        land_values = ['Promote recycling to reduce the amount of waste sent to landfills', 'Enforce strict regulations to control landfill emissions and promote better practices.', 'Promote practices that reduce waste generation and encourage reuse.'];
    }
    if(ld_color>=151 && ld_color<=300){
        land_values = ['Implement organic waste composting programs to reduce the amount of biodegradable waste sent to landfills.', 'Advocate for eco-friendly product design that considers recyclability and material reusability.', 'Optimize landfill design to maximize waste compaction and minimize airspace, reducing overall emissions.'];
    }
    if(ld_color>=301 && ld_color<=450){
        land_values = ['Encourage composting of organic waste to minimize methane emissions.', 'Implement systems to capture methane emitted from decomposing waste', 'Hold producers are accountable for the disposal and recycling of their products'];
    }
    if(ld_color>=451 && ld_color<=600){
        land_values = ['Invest in carbon offset projects to mitigate emissions that cannot be eliminated.', 'Raise awareness about landfill emissions and waste management practice', 'Support research into new technologies and methods for landfill emission control.'];
    }
    land_values.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        land_ul.appendChild(li);
    });


}
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
