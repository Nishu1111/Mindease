# view_users.py
from database import SessionLocal
from models import User

db = SessionLocal()
users = db.query(User).all()

for user in users:
    print(f"ID: {user.id}, Email: {user.email}, Password Hash: {user.password}")

db.close()
