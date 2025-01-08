from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from .models import BlogPage
from .models import Categorie
from .models import Tag

# Create your views here.
def home(request):
    template =loader.get_template("index.html")
    # text = "<h1>Bonjour</h1>"
    # text=text + " <p> Premier text de présentation!</p>"

    lstBlogPAges = BlogPage.objects.all()
    strAgePython = request.GET.get('ageurl',10)
    data ={'prenom':'charlene',
           'montres' : ['seiko','swatch','tissot'],
           'age' : int(strAgePython),
            'lstBlogPages': lstBlogPAges
    }
    return HttpResponse(template.render(data))