from django.urls import path
from . import views

urlpatterns = [
    path('todo-list/', views.TodoListAV.as_view(), name='todo-list'),
    path('todo-list/<int:pk>/', views.TodoDetailAV.as_view(), name='todo-detail'),
    path('select-all/', views.select_all),
    path('unselect-all/', views.unselect_all),
    path('delete-all/', views.delete_all)
]
