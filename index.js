var clickedButtonSaved = [];

$(".rating-btn").on("click", function(event) {
    var clickedButtonSaved = [];
    var clickedButton = (event.target.id);
    clickedButtonSaved.push(clickedButton);
     
    $(".rating-btn").removeClass("chosen");
    $(this).addClass("chosen");
    displayRating(clickedButton);
})

function displayRating(numberChosen) {
    switch (numberChosen) {
        case "one":
            $(".rating-selected").text("You selected 1 out of 5");
        break;

        case "two":
            $(".rating-selected").text("You selected  2 out of 5");
        break;

        case "three":
            $(".rating-selected").text("You selected 3 out of 5");
        break;

        case "four":
            $(".rating-selected").text("You selected 4 out of 5");
        break;

        case "five":
            $(".rating-selected").text("You selected 5 out of 5");
        break;
    
        default:
            console.log(numberChosen);
            break;
    }
}

$(".submit-btn").on("click", function() {
    $(".rating-container").addClass("hidden");
    $(".thank-you-container").removeClass("hidden");
});