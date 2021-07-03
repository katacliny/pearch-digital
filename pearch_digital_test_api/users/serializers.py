from rest_framework.serializers import ModelSerializer
from users.models import UserPersonalDetails, UserDirection, UserAcademicInfo


class UserPersonalDetailsSerializer(ModelSerializer):
    class Meta:
        model = UserPersonalDetails
        fields = "__all__"


class UserDirectionSerializer(ModelSerializer):
    class Meta:
        model = UserDirection
        fields = "__all__"


class UserAcademicInfoSerializer(ModelSerializer):
    class Meta:
        model = UserAcademicInfo
        fields = "__all__"
