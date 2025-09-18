from rest_framework import serializers
from .models import *

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login_user
        fields = ['email', 'username','password','confirm_password']

class LogbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = LogbookData
        fields = ['date', 'particulars','vendor','type','amount']

class PurchaseStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseStock
        fields = ['date', 'product_name','categories','brand_name','cost_price']
        

