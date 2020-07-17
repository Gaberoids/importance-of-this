
//Paragraph
$("p").click(function() {
    $(this).slideToggle("slow");
});

// buttons javascript
$("button").mouseenter(function() {
    $(this).removeClass("make-red").addClass("make-blue");
});

$("button").mouseleave(function() {
    $(this).removeClass("make-blue").addClass("make-red");
});

// box first javascript code
// $(document).ready(function() {
//     $(".box").on("click", function() {
//         var classNames = $(this).attr("class").split(" ");
//         $("." + classNames[1]).css("background-color", "red");
//     })
// });

// box second javascript 2
$(document).ready(function(){
    $(".box").on("click", function() {
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($("." + className).css("background-color") == "rgb(255, 0, 0)") {
            $("." + className).css("background-color", "#000");
        }
        else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        };
    });
});