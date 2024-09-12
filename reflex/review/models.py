from django.db import models
from django.db import  models


# Create your models here.

class ReviewModel(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=3000,default="")
    createdAt = models.DateTimeField(auto_now_add=True)
    movie = models.ForeignKey("movie",on_delete=models.SET_NULL,null=True)

class Hits(models.Model):
    count = models.IntegerField(default=0)


