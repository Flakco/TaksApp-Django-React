from rest_framework import serializers
from . models import task

class task_serializer(serializers.ModelSerializer):
    class Meta:
        model = task
        #fields = ('id','title','description','completed')
        fields = '__all__'

