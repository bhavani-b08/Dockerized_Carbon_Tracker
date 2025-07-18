from django.db import models
from django.conf import settings


class CarbonData(models.Model):

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)

    electric_type = models.CharField(max_length=50)
    energy_consumed = models.FloatField()
    electricity_factor = models.FloatField()

    fuel_type = models.CharField(max_length=50)
    fuel_consumed = models.FloatField()
    fuel_factor = models.FloatField()

    transport_mode = models.CharField(max_length=50)
    distance_traveled = models.FloatField()
    load_weight = models.FloatField()
    transport_factor = models.FloatField()

    methane_volume = models.FloatField()
    gwp_methane = models.FloatField(default=28)

    land_type = models.CharField(max_length=50)
    area_cleared = models.FloatField()
    carbon_stock_per_hectare = models.FloatField()
    area_rehabilitated = models.FloatField()
    rehab_rate = models.FloatField()

    coal_type = models.CharField(max_length=50)
    coal_produced = models.FloatField()
    coal_emission_factor = models.FloatField()
    carbon_content_fraction = models.FloatField()


    electricity_emission = models.FloatField(null=True, blank=True)
    fuel_emission = models.FloatField(null=True, blank=True)
    transport_emission = models.FloatField(null=True, blank=True)
    methane_emission = models.FloatField(null=True, blank=True)
    land_cleared_emission = models.FloatField(null=True, blank=True)
    land_offset = models.FloatField(null=True, blank=True)
    coal_emission = models.FloatField(null=True, blank=True)
    total_emissions = models.FloatField(null=True, blank=True)


