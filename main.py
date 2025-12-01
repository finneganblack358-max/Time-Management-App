from flask import Flask
from api.routes import api

app = Flask(__name__, template_folder="templates", static_folder="static")

app.register_blueprint(api)

if __name__ == "__main__":
    app.run(port=8000, debug=True)