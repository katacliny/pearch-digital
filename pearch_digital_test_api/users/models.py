from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class UserPersonalDetails(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    dni = models.CharField(max_length=200)


class UserDirection(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    direction = models.CharField(max_length=500)
    city = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    postal_code = models.CharField(max_length=200)


class UserAcademicInfo(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    studies = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    date = models.DateField()
