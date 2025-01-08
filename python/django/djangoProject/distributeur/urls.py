from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import DistributeurViewSet

router = DefaultRouter()

router.register("distributeur", DistributeurViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
