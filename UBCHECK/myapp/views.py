from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, "index.html")

def UBCHECK(request):
    return render(request, "UBCHECK.html")

def aboutme(request):
    return render(request, "aboutme.html")