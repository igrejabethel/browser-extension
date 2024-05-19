$(document).ready(function () {
	$('pre b').remove()
})

$(document).ready(function () {
	$('pre').each(function () {
		var song = $('.cifra .t1').text()
		var artist = $('.cifra .t3').text()
		var preContent = $(this).html()

		const lines = preContent
			.replace('[Intro]', '')
			.replace('[Final]', '')
			.split('\n')

		const filteredLines = lines.filter(
			(line) => !/^\s*$/.test(line) && !/\s{2,}/.test(line)
		)

		const newContent = filteredLines.join('\n')

		$('#cifra_capo').append(
			`<h2>Lyric</h2>
<textarea id="letra" style="width: 350px; height: 400px">${artist} - ${song}\n\n${song}\n${artist}\n\n${newContent}</textarea>`
		)
	})
})
