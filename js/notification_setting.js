$(document).ready(function () {
    getSettings(function (res) {
        $("#notification_after_time").val(res.notification_after_time)
        $("#notification_repeat_time").val(res.notification_repeat_time)
        $("#notification_sounds_volum").val(res.notification_sounds_volum)
    })
    $(".toggle_notification_settings").change(function () {
        var id = $(this).attr("id")
        console.log($(this).attr("id"), $(this).val())
        changeSettingRequest($(this).val(), id)


        if (id == "notification_after_time") {
          
        }
        if (id == "notification_repeat_time") {
            
        }
        if (id == "notification_sounds_volum") {
            
        }
    })
})