from extensions import db

class Test(db.Model):
    vin = db.Column(db.String(50), primary_key=True)
    order_number = db.Column(db.String(50))
    status = db.Column(db.String(20))
    
    station_1_at = db.Column(db.DateTime)
    station_2_at = db.Column(db.DateTime)
    station_3_at = db.Column(db.DateTime)
    station_4_at = db.Column(db.DateTime)
    station_5_at = db.Column(db.DateTime)
    station_6_at = db.Column(db.DateTime)
    station_7_at = db.Column(db.DateTime)
    station_8_at = db.Column(db.DateTime)
    station_9_at = db.Column(db.DateTime)
    station_10_at = db.Column(db.DateTime)