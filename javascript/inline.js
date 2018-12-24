$(document).ready(function(){
    if(!localStorage.getItem("intention")){
        $('#intention-span').text("Set Intention");
    }else{
        var intention = localStorage.getItem("intention");
        $('#intention-span').text(intention);
    }
    $('.modal').modal();
    $('#edit-btn').hover(function(){
        $('#edit-btn-text').addClass('grey-text');
    }, function(){
        $('#edit-btn-text').removeClass('grey-text');
    });
    $('#submit-btn').click(function(){
        var intention = $('#intention-input').val();
        localStorage.setItem("intention",intention);
        console.log(localStorage.getItem("intention"));
        $('#intention-span').text(intention);
        $('#edit-modal').modal('close');
    });
});