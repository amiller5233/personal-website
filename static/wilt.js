$(document).ready(function(){
	$.get('/get_wilt', function(data) {
		console.log(data)
		$('#loading').hide()
		$('#wilt').html(data.html)
		$('#wilt').addClass('fade_in')
		$('#wilt').show()
		$('#favicon').attr({'href':data.favicon})
		animate()
	})
})