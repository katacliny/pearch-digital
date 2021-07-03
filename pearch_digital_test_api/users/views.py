from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import IsAuthenticated
from users.serializers import (
    UserPersonalDetailsSerializer,
    UserDirectionSerializer,
    UserAcademicInfoSerializer,
)
from users.models import UserPersonalDetails, UserDirection, UserAcademicInfo


@method_decorator(
    name="create",
    decorator=swagger_auto_schema(request_body=UserPersonalDetailsSerializer),
)
@method_decorator(
    name="update",
    decorator=swagger_auto_schema(request_body=UserPersonalDetailsSerializer),
)
class UserPersonalDetailsViewSet(ViewSet):

    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = UserPersonalDetails.objects.filter(user=request.user).order_by("pk")
        serializer = UserPersonalDetailsSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = UserPersonalDetailsSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        queryset = UserPersonalDetails.objects.all()
        item = get_object_or_404(queryset, pk=pk)
        serializer = UserPersonalDetailsSerializer(item)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            item = UserPersonalDetails.objects.get(pk=pk)
        except UserPersonalDetails.DoesNotExist:
            return Response(status=404)
        serializer = UserPersonalDetailsSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        try:
            item = UserPersonalDetails.objects.get(pk=pk)
        except UserPersonalDetails.DoesNotExist:
            return Response(status=404)
        item.delete()
        return Response(status=204)


@method_decorator(
    name="create", decorator=swagger_auto_schema(request_body=UserDirectionSerializer)
)
@method_decorator(
    name="update", decorator=swagger_auto_schema(request_body=UserDirectionSerializer)
)
class UserDirectionViewSet(ViewSet):

    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = UserDirection.objects.filter(user=request.user).order_by("pk")
        serializer = UserDirectionSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = UserDirectionSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        queryset = UserDirection.objects.all()
        item = get_object_or_404(queryset, pk=pk)
        serializer = UserDirectionSerializer(item)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            item = UserDirection.objects.get(pk=pk)
        except UserDirection.DoesNotExist:
            return Response(status=404)
        serializer = UserDirectionSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        try:
            item = UserDirection.objects.get(pk=pk)
        except UserDirection.DoesNotExist:
            return Response(status=404)
        item.delete()
        return Response(status=204)


@method_decorator(
    name="create",
    decorator=swagger_auto_schema(request_body=UserAcademicInfoSerializer),
)
@method_decorator(
    name="update",
    decorator=swagger_auto_schema(request_body=UserAcademicInfoSerializer),
)
class UserAcademicInfoViewSet(ViewSet):

    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = UserAcademicInfo.objects.filter(user=request.user).order_by("pk")
        serializer = UserAcademicInfoSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = UserAcademicInfoSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        queryset = UserAcademicInfo.objects.all()
        item = get_object_or_404(queryset, pk=pk)
        serializer = UserAcademicInfoSerializer(item)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            item = UserAcademicInfo.objects.get(pk=pk)
        except UserAcademicInfo.DoesNotExist:
            return Response(status=404)
        serializer = UserAcademicInfoSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        try:
            item = UserAcademicInfo.objects.get(pk=pk)
        except UserAcademicInfo.DoesNotExist:
            return Response(status=404)
        item.delete()
        return Response(status=204)
