from rest_framework import viewsets
from .serializer import task_serializer
from .models import task

# Create your views here.

class task_views(viewsets.ModelViewSet):
    serializer_class = task_serializer
    queryset = task.objects.all()