$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {
                    required: true

                } ,
            grade:
                {
                    required: true,
                    min:5,
                    max:8,
                    digits: true,
                }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "Must Fill In",

                } ,
            grade:
                {
                    required: "Must enter a number (5-8).",
                    min:"Too young, must be in 5th grade at least.",
                    max:"Too old, highest grade is 8th grade.",
                    digits: "Please enter a number.",
                }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var name = $("#firstName").val();
        var gradeYear = $("#grade").val();
        $("#message").text(`You have registered ${name} for grade ${gradeYear} camp. Congratulations! `)

    }



});