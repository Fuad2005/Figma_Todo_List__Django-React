from django.urls import path
from . import views

urlpatterns = [
    path('todo-list/', views.TodoListAV.as_view(), name='todo-list'),
    path('todo-list/<int:pk>/', views.TodoDetailAV.as_view(), name='todo-detail'),
]
