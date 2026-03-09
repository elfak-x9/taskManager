from rest_framework import serializers
from .models import Task 


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        field = '__all__'
        read_only_field = ['user']
