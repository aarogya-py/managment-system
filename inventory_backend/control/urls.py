from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    path("/loginSignup",loginSignup),
    path("/home",home),
    path("/purchase_stock",Purchase_stock),
    path("/Sales_record",sales_record),
    path("/Sales_graph",sales_graph),
    path("/Summary",summary),
    path("/logbook",logbook),
    path("/view_logbook",view_logbook),
    

]