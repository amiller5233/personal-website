from flask import Flask, Blueprint, render_template, jsonify
from .spotify import *

splash = Blueprint('splash', __name__)
app = Flask(__name__)

@splash.route('/', methods=['GET'])
def index():
	return render_template('index.html')

@splash.route('/spotify')
def spotify():
	return render_template('spotify.html')

@splash.route('/visualizer')
def visualizer():
	return render_template('visualizer.html')

@splash.route('/get_wilt', methods=['GET'])
def get_wilt():
	song = sp_current_song()
	html = render_template('wilt.html', data=song)
	data = {
		'html': html,
		'favicon': song['artwork']
	}
	return jsonify(data)

app.register_blueprint(splash)