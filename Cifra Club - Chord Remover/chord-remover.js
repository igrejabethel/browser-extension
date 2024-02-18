$(document).ready(function() {
    $('pre b').remove()
})

$(document).ready(function() {
    $('pre').each(function() {
        var preContent = $(this).html()

        var newContent = preContent.replace('\n ', '\n')

        $(this).html(newContent)
    })
})