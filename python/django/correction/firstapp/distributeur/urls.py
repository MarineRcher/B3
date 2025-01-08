from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VentesViewSet, BoissonsViewSet

router = DefaultRouter()
router.register('ventes', VentesViewSet, 'ventes')
router.register('boisson', BoissonsViewSet, 'boisson')

urlpatterns = [
    path('', include(router.urls))
]