from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models


# Create your models here.


class serviceUser(AbstractBaseUser):
    email: str = models.CharField(max_length=100)

