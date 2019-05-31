$(document).ready(function(){
    // // When a colored panel is clicked, all panels vanish
    // $(".theButton").click(function() {
    //     $(".makeBlue").hide();
    // });
    
    // // When a colored panel is clicked, just that panel disappears
    // $(".theButton").click(function() {
    //     $(this).hide();
    // });
    
    // // When a panel is clicked, all siblings fade to 10% opacity
    // $(".theButton").click(function() {
    //     $("#panel .container").siblings().fadeTo(1000, 0.1);
    // });
   
    // // When reset is clicked, all panels revert to full opacity
    // $(".superButton").click(function() {
    //     $("#panel .container").siblings().fadeTo(1000, 1);
    // });
    
    // // When the mouse hovers over a panel, that panel turns black
    // $(".theButton").mouseover(function() {
    //     $(this).addClass("makeBlack");
    // });
    
    // // When the mouse moves away, the panel reverts back to its previous colour
    // $(".theButton").mouseleave(function() {
    //     $(this).removeClass("makeBlack");
    // });
    
    // Change text for reset button to display the colour (RGB) of selected panel
    $(".container .theButton").click(function() {
        let panelColor = $(this).css("background-color");
        // document.querySelector(".superButton").innerHTML = `${panelColor}`;
        $('.superButton').text(panelColor);
    });
});