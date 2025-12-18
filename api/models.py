from .extensions import db 

class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    model = db.Column(db.String(50))
    order_number = db.Column(db.String(50))
    status = db.Column(db.String(50))