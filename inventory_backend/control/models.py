from django.db import models

# Create your models here.
class Login_user(models.Model):
    email=models.EmailField(max_length=254)
    username=models.CharField(max_length=150)
    password=models.CharField(max_length=128)
    confirm_password=models.CharField(max_length=128)
    
    def __str__(self):
        return self.username