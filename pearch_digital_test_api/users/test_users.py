from .validators import validate_dni
import pytest
from django.core.exceptions import ValidationError


def test_dni_validator():

    with pytest.raises(ValidationError, match=r"71804643 is not an correct dni"):
        assert validate_dni("71804643")

    with pytest.raises(
        ValidationError, match=r"Something is wrong with this value => 7180PP4643"
    ):
        assert validate_dni("7180PP4643")

    assert validate_dni("71804643T") == None
