from django.contrib import admin
from .models import (
    Country,
    Gender,
    CustomerType,
    Branche,
    ProductLine,
    Payment,
    SuperMarketSales,
)

admin.site.register(Country)
admin.site.register(Gender)
admin.site.register(CustomerType)
admin.site.register(Branche)
admin.site.register(ProductLine)
admin.site.register(Payment)
admin.site.register(SuperMarketSales)