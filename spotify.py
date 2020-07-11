import os
import requests
import json

def sp_current_song():

	with open('sp_cache.json') as file:
		return json.load(file)

	'''
	with open('keys.json') as file:
		keys = json.load(file)

	headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'Bearer ' + keys['SPOTIFY_ACCESS_TOKEN']
	}

	res = requests.get('https://api.spotify.com/v1/me/player/currently-playing', headers=headers)

	print(res.json())
	return 0
	'''

def sp_access_token():
	pass

def sp_refresh_token():
	pass