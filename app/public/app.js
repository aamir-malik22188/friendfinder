$(document).ready(function() {
    // Jquery for dropdown buttons


    // $(".dropdown-toggle").click(function(){
        // $(".dropdown-menu").show();
    // })

    // Jquery for submit button and userinput
    $(".btn-primary").on("click", function(e){
        e.preventDefault();
    
    var userInput = {
        name: $("#nameInput").val().trim(),
        image: $("#imageLink").val().trim(),
        scores:[
            $('#question1').val().trim(),
            $('#question2').val().trim(),
            $('#question3').val().trim(),
            $('#question4').val().trim(),
            $('#question5').val().trim(),
            $('#question6').val().trim(),
            $('#question7').val().trim(),
            $('#question8').val().trim(),
            $('#question9').val().trim(),
            $('#question10').val().trim(),

        ]
    };
    console.log("The user selected " + userInput);
    })

    
    


});

