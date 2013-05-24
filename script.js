$(document).ready(function(){

    $('#download').click(function(e){

        $.generateFile({
            filename	: 'index.html',
            content		: $('input').val(),
            script		: 'download.php'
        });

        e.preventDefault();
    });

});