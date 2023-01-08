from django.shortcuts import render
from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class TodoListAV(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    
class TodoDetailAV(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


@api_view(['POST'])
def select_all(request):
    Todo.objects.all().update(completed=True)
    return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['POST'])
def unselect_all(request):
    Todo.objects.all().update(completed=False)
    return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['POST'])
def delete_all(request):
    Todo.objects.all().delete()
    return Response(status=status.HTTP_204_NO_CONTENT)