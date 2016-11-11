$(".main--container_box_title_yet").click(function () {
    $(this).next('ul').slideToggle();
})

function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}


function buy() {
    $("#myModal").css({
        display: "block"
    })
}

function close1() {
    $("#myModal").css({
        display: "none"
    })
    $("#myModal2").css({
        display: "none"
    })
}

function contactUs() {
    $("#myModal2").css({
        display: "block"
    })
}