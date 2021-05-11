     //===== Form Validat =====//
     jQuery(".form-valide").validate({
        rules: {
            "val-username": {
                required: !0,
                minlength: 3
            },
            "val-email": {
                required: !0,
                email: !0
            },
            "val-password": {
                required: !0,
                minlength: 5
            },
            "val-subject": {
                required: !0,
            },
            "val-message": {
                required: !0,
                minlength: 5
            }
        },
        messages: {
            "val-username": {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 3 characters"
            },
            "val-password": {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            "val-confirm-password": {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            "val-email": "Please enter a valid email address",
            "val-subject": "Please enter a subject",
        },
    
        ignore: [],
        errorClass: "invalid-feedback animated__animated fadeinup",
        errorElement: "div",
        errorPlacement: function(e, a) {
            jQuery(a).parents(".form-group > div").append(e)
        },
        highlight: function(e) {
            jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
        },
        success: function(e) {
            jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-valid")
        }
    
    });
