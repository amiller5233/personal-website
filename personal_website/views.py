from flask import Blueprint, render_template, jsonify
# from spotify import *

bp_splash = Blueprint('splash', __name__)

@bp_splash.route('/', methods=['GET'])
def index():
	return render_template('index.html')

@bp_splash.route('/spotify')
def spotify():
	return render_template('spotify.html')

@bp_splash.route('/visualizer')
def visualizer():
	return render_template('visualizer.html')

@bp_splash.route('/get_wilt', methods=['GET'])
def get_wilt():
	song = sp_current_song()
	html = render_template('wilt.html', data=song)
	data = {
		'html': html,
		'favicon': song['artwork']
	}
	return jsonify(data)

@bp_splash.route('/test')
def test():
	return render_template('err_404.html')

@bp_splash.errorhandler(404)
def err_404(e):
	return render_template('err_404.html'), 404
