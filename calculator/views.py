from django.shortcuts import render , redirect
from .forms import CarbonDataForm
from django.contrib.auth.decorators import login_required
def collect_data(request) :
    return render(request , 'details.html') 


@login_required
def save_details(request):
    if request.method == 'POST':
        form = CarbonDataForm(request.POST)
        if form.is_valid():
            data = form.save(commit=False)
            data.user = request.user

            data.electricity_emission = data.energy_consumed * data.electricity_factor
            data.fuel_emission = data.fuel_consumed * data.fuel_factor
            data.transport_emission = data.distance_traveled * data.load_weight * data.transport_factor
            data.methane_emission = data.methane_volume * data.gwp_methane
            data.land_cleared_emission = data.area_cleared * data.carbon_stock_per_hectare
            data.land_offset = data.area_rehabilitated * data.rehab_rate
            data.coal_emission = data.coal_produced * data.coal_emission_factor * data.carbon_content_fraction

            data.total_emissions = (
                data.electricity_emission +
                data.fuel_emission +
                data.transport_emission +
                data.methane_emission +
                data.land_cleared_emission -
                data.land_offset +
                data.coal_emission
            )

            data.save()

            return render(request, 'fp_track.html', {'total_emissions': data.total_emissions})
    else:
        form = CarbonDataForm()

    return render(request, 'fp_track.html', {'form': form})

