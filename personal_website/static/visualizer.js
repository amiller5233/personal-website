var canvas, context, request, clock
var bars = []

// Fires when content is loaded
document.addEventListener('DOMContentLoaded', function() {
	canvas = document.createElement('canvas')
	context = canvas.getContext('2d')

	// canvas styling
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
	canvas.style.position = 'fixed'
	canvas.style['pointer-events'] = 'none'
	canvas.style['z-index'] = -1
	canvas.style.top = 0
	canvas.style.left = 0
	canvas.style.margin = '0px ' + Math.floor(canvas.width%50)/2 + 'px'
	canvas.setAttribute('id', 'visualizer_canvas')

	document.body.appendChild(canvas)

	// create bars
	for (var i = 0; i < Math.floor(canvas.width/50); i++) {
		bars.push(new Bar(i))
	}
})

// Fires after document is rendered
window.addEventListener('load', function(){
	setInterval(function(){
		clock = !clock
	}, 1000)

	// animate()
})

function animate() {
	request = requestAnimationFrame(animate)
	context.clearRect(0, 0, canvas.width, canvas.height)
	bars.forEach(function(b){ b.draw() })
}

function random(bot,top,mult=1) {
	// [bot,top)
	return Math.floor(((Math.random()*(top-bot))+bot)/mult)*mult
}

function Bar(index) {

	var width = 50, padding = 5, min_height = 15, max_height = 150, start_line = canvas.height-5
	// color 1 is on bottom, 2 on top
	// var color1 = '#d741a7', color2 = '#fa198b'
	var color1 = '#f04b8f', color2 = '#ffc05c'
	// var color1 = '#26a8a7', color2 = '#2ab759'
	// var color1 = '#2ab759', color2 = '#84C977'

	var grd = context.createLinearGradient(0, start_line-max_height, 0, start_line)
	grd.addColorStop(1, color1);
	grd.addColorStop(0, color2);
	context.fillStyle = grd

	this.up = true
	this.inc = random(3,10)
	this.index = index
	this.height = random(min_height, max_height)

	this.draw = function() {
		// update
		this.up ? this.height += this.inc : this.height -= this.inc

		if (this.height >= max_height || this.height <= min_height)
			this.up = !this.up

		// draw
		context.fillRoundRect((this.index*width)+(padding/2), start_line, width-padding, -this.height, 7)
	}
}

CanvasRenderingContext2D.prototype.fillRoundRect = function(x, y, w, h, r) {
	if (Math.abs(w) < 2 * r)
		r = Math.abs(w) / 2
	if (Math.abs(h) < 2 * r)
		r = Math.abs(h) / 2
	this.beginPath()
	this.moveTo(x+r, y)
	this.arcTo(x+w, y, x+w, y+h, r)
	this.arcTo(x+w, y+h, x, y+h, r)
	this.arcTo(x, y+h, x, y, r)
	this.arcTo(x, y, x+w, y, r)
	this.fill()
	return this
}