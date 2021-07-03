"""pearch_digital_test_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView
from django.conf.urls import url, handler404, handler500
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework_swagger.views import get_swagger_view
from django.http import HttpResponse
from rest_framework import permissions
import datetime


schema_view = get_swagger_view(title="GID TATC API")

handler500 = lambda *args: HttpResponse("500")
handler404 = lambda *args: HttpResponse("404")

admin.site.site_header = "Pearch Digital Test"
admin.site.site_title = "Pearch Digital"
admin.site.index_title = "Pearch Digital"

schema_view = get_schema_view(
    openapi.Info(
        title="Pearch Digital API",
        default_version="v1",
        description="_",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="nolodelatorre@gmail.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path(
        "",
        lambda request: HttpResponse(f"Healthy {datetime.datetime.now()}."),
        name="home",
    ),
    path("api/users", include("users.urls")),
    path("admin/", admin.site.urls),
    url(
        r"^swagger/$",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    url(
        r"^swagger(?P<format>\.json|\.yaml)$",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    url(
        r"^redoc/$", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"
    ),
    url(r"^rest-auth/", include("rest_auth.urls")),
    url(r"^rest-auth/", include("rest_auth.urls")),
    url(r"^rest-auth/registration/", include("rest_auth.registration.urls")),
]
