from django.db import models

# Create your models here.
class Login_user(models.Model):
    email=models.EmailField(max_length=254)
    username=models.CharField(max_length=150)
    password=models.CharField(max_length=128)
    confirm_password=models.CharField(max_length=128)
    
    def __str__(self):
        return self.username
    
class LogbookData(models.Model):
    date=models.DateField()
    particulars=models.CharField(max_length=255)
    vendor=models.CharField(max_length=255)
    type=models.CharField(max_length=100)
    amount=models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"{self.date} - {self.particulars} - {self.vendor} - {self.type} - {self.amount}"
    
class PurchaseStock(models.Model):
    date=models.DateField()
    product_name=models.CharField(max_length=255)
    categories=models.CharField(max_length=255)
    brand_name=models.CharField(max_length=255)
    cost_price=models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"{self.date} - {self.product_name} - {self.categories} - {self.brand_name} - {self.cost_price}"