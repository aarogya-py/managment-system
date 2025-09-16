from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from .serealizer import *
from .models import *
@api_view(['POST'])
def login(request):
    email=request.data.get('email')
    username=request.data.get('username')
    password=request.data.get('password')
    confirm_password=request.data.get('confirm_password')
    serealizer=LoginSerializer(data=request.data)
    if not email or not username or not password or not confirm_password:
        return Response({"All fields are required"},status=status.HTTP_400_BAD_REQUEST)
    email_exists=Login_user.objects.filter(email=email).exists()
    username_exists=Login_user.objects.filter(username=username).exists()
    if email_exists:
        return Response({"email_exist"},status=status.HTTP_400_BAD_REQUEST)
    if username_exists:
        return Response({"Username_exists"},status=status.HTTP_400_BAD_REQUEST)
    if password != confirm_password:
        return Response({"confirm_dont_match"},status=status.HTTP_400_BAD_REQUEST)
    if serealizer.is_valid():
        serealizer.save()
        return Response(serealizer.data,status=status.HTTP_201_CREATED)
    return Response(serealizer.errors,status=status.HTTP_400_BAD_REQUEST)

  

    
def home():
    print("home")

def purchase_stock():
    print("")

def sales_record():
  print("")

def sales_graph():
  print("")

def summary():
  print("")

def logbook():
  print("") 
