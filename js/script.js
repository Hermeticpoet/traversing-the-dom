//wait until page is ready
$(document).ready(function() {
    
    // sets <a> element within paragraph to yellow
    $("p").click(function() {
        
        // returns all the <a> child elements that are within this paragraph
        $(this).children("a").css("color", "yellow");
    });
    
    // Toggle the visibility of the paragraph when a button is clicked
    $("button").click(function() {
        $(this).prev().slideToggle("slow");
    });
    
    // display card paragraphs when image is clicked
    $("img").click(function() {
        $(this).next().children("p").slideToggle("slow");
    });
    
    // add class to cards to change background-color to pink
    $(".card").click(function() {
        $(this).toggleClass("clickedCard");
    });
    
    // all cards that are currently not selected will be hidden when 'select' is clicked
    $("#select_btn").click(function() {
        $(".card:not(.clickedCard)").hide();
    });
    
    // select all cards to show again
    $("#all_btn").click(function() {
        $(".card").show();
    });
});





