$(document).ready(function() {

    $('form').on('submit', function(event) {
        event.preventDefault();
        var item = $('form input');
        var todo = { item: item.val().trim() };

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data) {
                alert(data.data.msg);
                //do something with the data via front-end framework
                location.reload();
            }
        });

        return false;

    });

    $('li').on('click', function() {
        var item = $(this).text().trim();
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data) {
                alert(data.data.msg);
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});