from django.contrib import admin
from .models import BlogPage, BlogPagesAdmin, Categorie, Tag
# Register your models here.
admin.site.register(BlogPage, BlogPagesAdmin)   
admin.site.register(Categorie) 
admin.site.register(Tag) 
