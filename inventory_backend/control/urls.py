from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    path("/login",login),
    path("/home",home),
    path("/purchase_stock",Purchase_stock),
    path("/Sales_record",sales_record),
    path("/Sales_graph",sales_graph),
    path("/Summary",summary),
    path("/logbook",logbook),
    

]