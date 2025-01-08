from django.http import HttpResponse
from django.template import loader
from .models import BlogPage


def home(request):
    listeBlog = BlogPage.objects.all()
    strAgePython = request.GET.get("ageurl", 10)
    template = loader.get_template("index.html")
    data = {
        "prenom": "charlene",
        "blogs": listeBlog,
        "age": int(strAgePython),
    }
    return HttpResponse(template.render(data))
