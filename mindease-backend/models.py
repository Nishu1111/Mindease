#DB schema
# models.py
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from datetime import datetime
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)

class EmotionEntry(Base):
    __tablename__ = "emotion_entries"
    id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String, ForeignKey("users.email"))
    emotion = Column(String)
    timestamp = Column(DateTime, default=datetime.utcnow)

class EmotionHistory(Base):
    __tablename__ = "emotion_history"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=True)
    emotion = Column(String)
    suggestion = Column(String)
    timestamp = Column(DateTime, default=datetime.utcnow)




