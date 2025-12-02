from flask import Blueprint, render_template

api = Blueprint("api", __name__)

@api.route("/")
def index():
    return render_template("index.html")

@api.route("/events")
def events():
    return render_template("events.html")