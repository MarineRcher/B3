from django.contrib import admin

from .models import BlogPage, BlogPagesAdmin, Tag, Categories

admin.site.register(BlogPage, BlogPagesAdmin)
admin.site.register(Categories)
admin.site.register(Tag)
