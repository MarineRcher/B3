from django.contrib import admin
from django.db import models


class Categories(models.Model):
    title = models.CharField(max_length=200)


class Tag(models.Model):
    title = models.CharField(max_length=200)


class BlogPage(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to="static/images/", blank=True)
    date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(
        Categories, on_delete=models.CASCADE, blank=True, null=True
    )
    tag = models.ManyToManyField(Tag)

    def __str__(self):
        return self.title


class BlogPagesAdmin(admin.ModelAdmin):
    list_display = ("title", "date")
    list_filter = ("date",)
    search_fields = ("title", "content")
