from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from .serealizer import *
from .models import *
from django.db.models import Sum,F
@api_view(['POST'])
def loginSignup(request):
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

@api_view(['GET'])
def Login_verification(request):
    username=request.data.get('username')
    password=request.data.get('password')
    try:
        user=Login_user.objects.get(username=username)
    except Login_user.DoesNotExist:   
        return Response({"Invalid username"},status=status.HTTP_400_BAD_REQUEST)
    if user.password != password:
        return Response({"Invalid password"},status=status.HTTP_400_BAD_REQUEST)
    return Response({"Login successful"},status=status.HTTP_200_OK)

@api_view(['GET'])
def home(get):
    total_purchase=(LogbookData.objects.aggregate(total=Sum('amount'))['total'])or 0 if type=='purchase' else 0
    total_revenue= (LogbookData.objects.aggregate(total=Sum('amount'))['total']) or 0 if type=='sales' else 0
    profit=total_revenue-total_purchase

    

@api_view(['POST','GET'])
def Purchase_stock(request):
    date=request.data.get('date')
    product_name=request.data.get('product_name')
    categories=request.data.get('categories')
    brand_name=request.data.get('brand_name')
    cost_price=request.data.get('cost_price')
    serealizer=PurchaseStockSerializer(data=request.data)
    if not date or not product_name or not categories or not brand_name or not cost_price:
        return Response({"All fields are required"},status=status.HTTP_400_BAD_REQUEST) 
    if serealizer.is_valid():
        serealizer.save()
        return Response(serealizer.data,status=status.HTTP_201_CREATED)
    return Response(serealizer.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','POST'])
def sales_record(request):
    categories=request.data.get('categories')
    brands=request.data.get('brands')
    keywords=request.data.get('keywords')


def sales_graph():
    print("")

def summary():
    print("")

@api_view(['POST','GET'])
def logbook(request):
    date=request.data.get('date')
    particulars=request.data.get('particulars')
    vendor=request.data.get('vendor')
    type=request.data.get('type')
    amount=request.data.get('amount')
    serealizer=LogbookSerializer(data=request.data)
    if not date or not particulars or not vendor or not type or not amount:
        return Response({"All fields are required"},status=status.HTTP_400_BAD_REQUEST)
    if serealizer.is_valid():
        serealizer.save()
        return Response(serealizer.data,status=status.HTTP_201_CREATED)
    return Response(serealizer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def view_logbook(request):
    logbook_entries=LogbookData.objects.all()
    serealizer=LogbookSerializer(logbook_entries,many=True)
    return Response(serealizer.data,status=status.HTTP_200_OK)

