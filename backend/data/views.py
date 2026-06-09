from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import * 
from .models import * 
from rest_framework.response import Response
from django.db.models import Sum, F, Func, Value, FloatField, IntegerField, Case, When
from django.db.models.functions import Cast


class SuperMarketSalesViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = SuperMarketSales.objects.all()
    serializer_class = SuperMarketSalesSerializer

    def list(self, request): 
        queryset = SuperMarketSales.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


# class BrancheDataViewset(viewsets.ViewSet): 
#     permission_classes = [permissions.AllowAny]
#     queryset = SuperMarketSales.objects.all()
#     serializer_class = BrancheDataSerializer

#     def list(self, request): 
#         total_sum = SuperMarketSales.objects.aggregate(total_quantity=Sum('quantity'))
#         total_quantity_value = total_sum['total_quantity']

#         queryset = SuperMarketSales.objects.values('branche', 'branche__name')\
#         .annotate(quantity=Sum('quantity'))\
#         .annotate(percentage=Func(
#                       (Cast(F('quantity'), FloatField())/ total_quantity_value) * 100,
#                       Value(2), 
#                       function='ROUND', 
#                       output_field=FloatField()
#                     ))
                 
        
#         serializer = self.serializer_class(queryset, many=True)
#         return Response(serializer.data)


class BrancheDataViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    serializer_class = BrancheDataSerializer

    def list(self, request): 
        total_quantity_value = (
            SuperMarketSales.objects.aggregate(total_quantity=Sum("quantity"))["total_quantity"] 
            or 0
        )

        queryset = (
            SuperMarketSales.objects
            .values("branche", "branche__name")
            .annotate(quantity=Sum("quantity"))
            .order_by("branche__name")
        )

        data = []
        for item in queryset:
            quantity = item["quantity"] or 0
            percentage = round((quantity / total_quantity_value) * 100, 2) if total_quantity_value else 0

            data.append({
                "id": item["branche"],
                "label": item["branche__name"],
                "value": quantity,
                "percentage": percentage,
            })

        return Response(data)
    

class GenderDataViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = SuperMarketSales.objects.all()
    serializer_class = GenderDataSerializer

    def list(self, request): 
        queryset = SuperMarketSales.objects.values('gender', 'gender__name')\
                   .annotate(quantity=Sum('quantity'))
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    

class ProductBrancheViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = SuperMarketSales.objects.all()
    serializer_class = ProductBrancheDataSerializer

    def list(self, request): 
        queryset = SuperMarketSales.objects.values('productline__name')\
                   .annotate(quantityBrancheA=Sum(
                       Case(
                           When(branche__name="A", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityBrancheB=Sum(
                       Case(
                           When(branche__name="B", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityBrancheC=Sum(
                       Case(
                           When(branche__name="C", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


class CountryDataViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = SuperMarketSales.objects.all()
    serializer_class = CountryDataSerializer

    def list(self, request): 
        queryset = SuperMarketSales.objects.values('date__month')\
                   .annotate(quantityNetherlands=Sum(
                       Case(
                           When(country__name="Netherlands", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityGermany=Sum(
                       Case(
                           When(country__name="Germany", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityFrance=Sum(
                       Case(
                           When(country__name="France", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)