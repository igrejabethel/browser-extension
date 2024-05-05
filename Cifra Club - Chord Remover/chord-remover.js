$(document).ready(function () {
	$('pre b').remove()
})

$(document).ready(function () {
	$('pre').each(function () {
		var preContent = $(this).html()

		var newContent = preContent
			.replace('\n ', '\n')
			.replace('[Intro]', '')
			.replace('[Final]', '')

		$(this).html(newContent)

		$('#cifra_capo').append(
			`<h2>Lyric</h2>
<textarea style="width: 500px; height: 400px">${newContent}</textarea>`
		)
	})
})
