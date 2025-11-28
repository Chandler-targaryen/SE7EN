import requests
from jose import jwt
from fastapi import HTTPException, Header
import os
from dotenv import load_dotenv

load_dotenv()

CLERK_JWKS_URL = os.getenv("CLERK_JWKS_URL")

jwks = requests.get(CLERK_JWKS_URL).json()

def verify_clerk_token(authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing Authorization header")

    try:
        token = authorization.split("Bearer ")[1]
    except:
        raise HTTPException(status_code=401, detail="Invalid Authorization format")

    try:
        header = jwt.get_unverified_header(token)
        key = None

        for jwk in jwks["keys"]:
            if jwk["kid"] == header["kid"]:
                key = jwk
                break

        if not key:
            raise HTTPException(status_code=401, detail="Key ID mismatch")

        payload = jwt.decode(
            token,
            key,
            algorithms=[header["alg"]],
            options={"verify_aud": False}, 
        )

        return payload

    except Exception as e:
        raise HTTPException(status_code=401, detail=f"Token validation failed: {e}")
