from flask import Flask
from .views import bp_splash

app = Flask(__name__)
app.register_blueprint(bp_splash)