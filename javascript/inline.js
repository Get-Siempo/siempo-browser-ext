$(document).ready(function () {
    $('.modal').modal();
    if (!localStorage.getItem("intention")) {
        $('#intention-span').text("Set Intention");
        $('#intention-input').attr("placeholder", "Type a few words");
        $('#edit-modal').modal('open');
    } else {
        var intention = localStorage.getItem("intention");
        $('#intention-span').text(intention);
        $('#intention-input').attr("value", intention);
    }
    $('#submit-btn').click(function () {
        var intention = $('#intention-input').val();
        if (intention == "") {
            $('#intention-input').attr("placeholder", "Type a few words");
        } else {
            localStorage.setItem("intention", intention);
            console.log(localStorage.getItem("intention"));
            $('#intention-span').text(intention);
            $('#edit-modal').modal('close');
        }
    });
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            var intention = $('#intention-input').val();
            if (intention == "") {
                $('#intention-input').attr("placeholder", "Type a few words");
            } else {
                localStorage.setItem("intention", intention);
                console.log(localStorage.getItem("intention"));
                $('#intention-span').text(intention);
                $('#edit-modal').modal('close');
            }
        }
    });
    $('#intention-span').click(function () {
        $('#edit-modal').modal('open');
    });
});