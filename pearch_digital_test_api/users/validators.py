from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

# Create your models here.
def validate_dni(value):
    try:
        int(value[: len(value) - 1])
    except:

        raise ValidationError(
            _(f"Something is wrong with this value => {value}"),
            params={"value": value},
        )
    l = "TRWAGMYFPDXBNJZSQVHLCKE"
    if not l[int(value[: len(value) - 1]) % 23] == value[len(value) - 1]:
        raise ValidationError(
            _("%(value)s is not an correct dni"),
            params={"value": value},
        )
