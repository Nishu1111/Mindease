from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to connect (VERY important)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change * to your domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

users_db = []  # In-memory fake DB

class User(BaseModel):
    email: str
    password: str

@app.post("/register")
def register(user: User):
    for u in users_db:
        if u["email"] == user.email:
            raise HTTPException(status_code=400, detail="Email already exists")
    users_db.append(user.dict())
    return {"message": "User registered successfully"}






