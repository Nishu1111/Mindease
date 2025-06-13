from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from passlib.hash import bcrypt
from database import SessionLocal
from models import User  # your SQLAlchemy model

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # <-- your frontend port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)

# Pydantic schema
class UserCreate(BaseModel):
    email: str
    password: str

# DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    # Check if email already exists
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already exists")

    # Hash the password
    hashed_password = bcrypt.hash(user.password)

    # Create a new user object
    new_user = User(email=user.email, password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User registered successfully"}
#login
class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/login")
def login(request: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == request.email).first()

    if not user or not bcrypt.verify(request.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return {"message": "Login successful", "user": {"id": user.id, "email": user.email}}

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Backend is running"}
