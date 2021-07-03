from rest_framework.routers import SimpleRouter
from users import views


router = SimpleRouter()

router.register(
    r"userpersonaldetails", views.UserPersonalDetailsViewSet, "UserPersonalDetails"
)
router.register(r"userdirection", views.UserDirectionViewSet, "UserDirection")
router.register(r"useracademicinfo", views.UserAcademicInfoViewSet, "UserAcademicInfo")

urlpatterns = router.urls
