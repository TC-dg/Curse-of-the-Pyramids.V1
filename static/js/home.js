// document.write("hi")
var count = 0;
function login(){
    count = count + 1;
    // alert(count);
    // $("#1").css("display", "none");
    if (count % 2) {
        $(".content").css("border", "0px");
        grid.src = "";
    } else {
        $(".content").css("border", "5px solid rgb(163, 60, 0)");
        grid.src = "./npc.html";
    }
}

function hello() {
    alert("hello!");
}

var grid = document.getElementById("grid");
grid.src = "./npc.html"