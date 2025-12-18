from flask import Blueprint, redirect, url_for, jsonify

from extensions import db
from models import Test

main = Blueprint('main', __name__)

@main.route('/')
def index():
    tests = Test.query.all()
    tests_list_html = [f"<li>{ test.model }</li>" for test in tests]
    return f"<ul>{''.join(tests_list_html)}</ul>"

@main.route('/add/<model>')
def add_test(model):
    db.session.add(Test(model=model, order_number="12345", status="pending" ))
    db.session.commit()
    return redirect(url_for("main.index"))

@main.route("/api")
def api_index():
    return jsonify({"message": "Welcome to Coding Craft YT Channel!"})

@main.route("/api/vins", methods=['GET'])
def get_vins():
    # Consultamos solo la columna 'vin' de todos los registros
    results = db.session.query(Test.vin).all()
    
    # Convertimos la lista de tuplas [(vin1,), (vin2,)] en una lista plana [vin1, vin2]
    vins = [r.vin for r in results]
    
    return jsonify(vins)