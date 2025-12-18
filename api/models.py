from .extensions import db 
import enum

class StatusEnum(enum.Enum):
    NOT_STARTED = "NOT_STARTED"
    STATION_A = "STATION_A"
    STATION_B = "STATION_B"
    STATION_C = "STATION_C"
    STATION_D = "STATION_D"
    STATION_E = "STATION_E"
    STATION_F = "STATION_F"
    STATION_G = "STATION_G"
    STATION_H = "STATION_H"
    STATION_I = "STATION_I"
    STATION_J = "STATION_J"
    COMPLETED = "COMPLETED"

class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    model = db.Column(db.String(50))
    order_number = db.Column(db.String(50))
    status = db.Column(db.String(50))

class Station(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))

class Unit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    vin = db.Column(db.String(100), nullable=False, unique=True)
    model = db.Column(db.String(100), nullable=False)
    order_number = db.Column(db.String(100), nullable=False)
    status = db.Column(db.Enum(StatusEnum), default=StatusEnum.NOT_STARTED)
    station_a = db.Column(db.DateTime, nullable=True)
    station_b = db.Column(db.DateTime, nullable=True)
    station_c = db.Column(db.DateTime, nullable=True)
    station_d = db.Column(db.DateTime, nullable=True)
    station_e = db.Column(db.DateTime, nullable=True)
    station_f = db.Column(db.DateTime, nullable=True)
    station_g = db.Column(db.DateTime, nullable=True)
    station_h = db.Column(db.DateTime, nullable=True)
    station_i = db.Column(db.DateTime, nullable=True)
    station_j = db.Column(db.DateTime, nullable=True)


