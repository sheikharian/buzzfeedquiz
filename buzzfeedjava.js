/*global $*/
console.log("hello");
var userpoints = 0;
$(".answer1").click(function() {
    userpoints = userpoints + 1;
});

$(".answer2").click(function() {
    userpoints = userpoints + 2;
});

$(".answer3").click(function() {
    userpoints = userpoints + 3;
});

$(".answer4").click(function() {
    userpoints = userpoints + 4;
});

$("#submit").click(function() {
    if (16 >= userpoints && userpoints > 12) {
        $(".result").html("<h3>You're gaming console is a PC!</h3> <img src='https://content.ibuypower.com/Images/Components/10060/Element_Main_1200-gaming-pcs.png'>");
    }
    else if (12 <= userpoints && userpoints > 8) {
        $(".result").html("<h3>You're gaming console is a Playstation 4!</h3> <img src='https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dwc4d230bf/images/PLAYSTATION4SLIMW/PLAYSTATION4SLIMW.png'>");
    }
    else if (8 <= userpoints && userpoints > 4) {
        $(".result").html("<h3>You're gaming console is a Xbox One!</h3> <img src='https://vignette.wikia.nocookie.net/nickfanon/images/e/ed/Xbox-one-lrg.png/revision/latest?cb=20140505185701'>");
    }
    else if (userpoints <= 4) {
        $(".result").html("<h3>You're gaming console is a Nintendo Switch!</h3> <img src='https://vignette.wikia.nocookie.net/battlefordreamislandfanfiction/images/e/ee/Nintendo_Switch_body.png/revision/latest?cb=20170810193726'>");
    }

    console.log(userpoints);
});

$(".q1").click(function() {
    $(".q1").hide();
});

$(".q2").click(function() {
    $(".q2").hide();
});

$(".q3").click(function() {
    $(".q3").hide();
});

$(".q4").click(function() {
    $(".q4").hide();
});

$("#startover").click(function() {
    location.reload( /*global location*/ );
});
