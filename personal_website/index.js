var express = require('express')
var request = require('request')
var path = require('path')
var fs = require('fs')
require('dotenv').config()
var app = express()

app.use(express.static('static'))
app.set('view engine', 'ejs')

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/views/index.html'))
})

app.get('/spotify', function(req,res){
	res.sendFile(path.join(__dirname+'/views/spotify.html'))
	// res.render('spotify')
})

app.get('/visualizer', function(req,res){
	res.sendFile(path.join(__dirname+'/views/visualizer.html'))
})

app.get('/get_wilt', function(req,res) {
	spotify_current_track(function(ret){
		res.render('wilt', ret, function(e,html){
			res.send({'html': html, 'favicon': ret.artwork})
			console.log('wilt sent successfully!')
		})
	})
})

function spotify_current_track(callback) {
	var timeout = 1000
	var attempts = 10
	var interval = setInterval(function(){
		request.get({
			url: 'https://api.spotify.com/v1/me/player/currently-playing',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + process.env.SPOTIFY_ACCESS_TOKEN
			}
		}, function(e,r,body) {
			if (!e && r.statusCode === 200) {
				// Successful request
				body = JSON.parse(body)
				if (body.item.explicit) {
					// Filter explicit songs ;)
					console.log('EXPLICIT CONTENT DETECTED!!!!1!1')
					fs.readFile('wilt_cache.json', function(e,data){
						if (!e) {
							callback(JSON.parse(data))
						} else {
							console.log(e)
						}
					})
				} else {
					data = {
						'track_name': body.item.name,
						'track_link': body.item.external_urls.spotify,
						'artist_name': body.item.artists[0].name,
						'artist_link': body.item.artists[0].external_urls.spotify,
						'album_name': body.item.album.name,
						'album_link': body.item.album.external_urls.spotify,
						'artwork': body.item.album.images[0].url
					}
					fs.writeFile('wilt_cache.json', JSON.stringify(data), function(e) {
						console.log(e)
					})
					callback(data)
				}
				clearInterval(interval)
			} else if (r.statusCode === 401) {
				// Successful request, invalid token
				console.log('Error: Invalid access token')
				console.log('Trying again in ' + timeout/1000 + ' seconds...')
				spotify_refresh_token()
			} else {
				// Unexpected error
				console.log('Error: Could not get current track')
				fs.readFile('wilt_cache.json', function(e,data){
					if (!e) {
						callback(JSON.parse(data))
					} else {
						console.log(e)
					}
				})
				clearInterval(interval)
			}
		})
	}, timeout)
}

function spotify_refresh_token() {
	request.post({
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			'Authorization': 'Basic ' + Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')
		},
		form: {
			grant_type: 'refresh_token',
			refresh_token: process.env.SPOTIFY_REFRESH_TOKEN
		},
		json: true
	}, function(e,r,body){
		if (!e && r.statusCode === 200) {
			console.log('Access token has been refreshed')
			process.env.SPOTIFY_ACCESS_TOKEN = body.access_token
		} else {
			console.log('Error: Could not refresh access token')
		}
	})
}

var server = app.listen(process.env.PORT, function(){
	console.log('Server running on port ' + process.env.PORT)
})