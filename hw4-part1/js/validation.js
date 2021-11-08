$(function(){
    $("#nums").validate({
        rules: {
            num1:{
                required: true,
                max: 50,
                min: -50
            },
            num2:{
                required: true,
                max: 50,
                min: -50
            },
            num3:{
                required: true,
                max: 50,
                min: -50
            },
            num4:{
                required: true,
                max: 50,
                min: -50
            }
        },
        messages: {
            num1:{
                required:  "Please enter the minimum column value",
                max: "Please enter a minimum column value lower than 50",
                min: "Please enter a minimum column value higher than -50"
            },
            num2:{
                required:  "Please enter the maximum column value",
                max: "Please enter a maximum column value lower than 50",
                min: "Please enter a maximum column value higher than -50"
            },
            num3:{
                required:  "Please enter the minimum row value",
                max: "Please enter a minimum row value lower than 50",
                min: "Please enter a minimum row value higher than -50"
            },
            num4:{
                required:  "Please enter the maximum row value",
                max: "Please enter a maximum row value lower than 50",
                min: "Please enter a maximum row value higher than -50"
            },
        },

        errorElement : 'div',
        errorLabelContainer: '#errorMSG',

        submitHandler: function(form) {
            if($("#nums").valid()) {
                table();
            } else {
                return false;
            }
        },
        
    });
});