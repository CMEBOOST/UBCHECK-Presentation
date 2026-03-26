from django.urls import path
from myapp import views

urlpatterns = [
    path('',views.index),
    path('UBCHECK',views.UBCHECK),
    path('aboutme',views.aboutme),
]