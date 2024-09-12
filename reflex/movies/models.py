from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


# Create your models here.
class Movies(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=256)
    poster = models.URLField()
    showTime = models.CharField(max_length=4)
    openDate = models.CharField(max_length=8, verbose_name="개봉연도")


class BoxOffice(models.Model):
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    rank = models.PositiveSmallIntegerField(validators=(MinValueValidator(0), MaxValueValidator(10)))
