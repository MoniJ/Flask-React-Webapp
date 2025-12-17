from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api")
def index():
    return jsonify({"message": "Welcome to Coding Craft YT Channel!"})

#Run locally with `python app.py`
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)