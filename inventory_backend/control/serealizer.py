from rest_framework import serializers
from .models import *

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login_user
        fields = ['email', 'username','password','confirm_password']
