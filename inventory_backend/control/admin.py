from django.contrib import admin

# Register your models here.
from .models import *
admin.site.register(Login_user)
admin.site.register(LogbookData)
admin.site.register(PurchaseStock)