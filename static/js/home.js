var grid = document.getElementById("grid");
grid.src = ""
$(".content").css("dispaly", "none");
$(".content").css("border", "0px");

var a = ['apple', 'banana'];
// alert(a[1]);

function home(){
    $("#f01").css("border", "0px");
    $("#f02").css("border", "0px");
    $("#f03").css("border", "0px");
    $("#f04").css("border", "0px");
    $("#f05").css("border", "0px");
    $("#f06").css("border", "2px solid white");
    $(".content").css("border", "0px");
    grid.src = "";
}

function npc(){
    $("#f06").css("border", "0px");
    $("#f02").css("border", "0px");
    $("#f03").css("border", "0px");
    $("#f04").css("border", "0px");
    $("#f05").css("border", "0px");
    $("#f01").css("border", "2px solid white");
    $(".content").css("border", "5px solid rgb(163, 60, 0)");
    grid.src = "./npc.html";
}

function get(){
    $("#f01").css("border", "0px");
    $("#f06").css("border", "0px");
    $("#f03").css("border", "0px");
    $("#f04").css("border", "0px");
    $("#f05").css("border", "0px");
    $("#f02").css("border", "2px solid white");
    $(".content").css("border", "5px solid rgb(163, 60, 0)");
    grid.src = "";
}

function bag(){
    $("#f01").css("border", "0px");
    $("#f02").css("border", "0px");
    $("#f06").css("border", "0px");
    $("#f04").css("border", "0px");
    $("#f05").css("border", "0px");
    $("#f03").css("border", "2px solid white");
    $(".content").css("border", "5px solid rgb(163, 60, 0)");
    grid.src = "./npc.html";
}

function map(){
    $("#f01").css("border", "0px");
    $("#f02").css("border", "0px");
    $("#f03").css("border", "0px");
    $("#f06").css("border", "0px");
    $("#f05").css("border", "0px");
    $("#f04").css("border", "2px solid white");
    $(".content").css("border", "5px solid rgb(163, 60, 0)");
    grid.src = "./npc.html";
}

function mission(){
    $("#f01").css("border", "0px");
    $("#f02").css("border", "0px");
    $("#f03").css("border", "0px");
    $("#f04").css("border", "0px");
    $("#f06").css("border", "0px");
    $("#f05").css("border", "2px solid white");
    $(".content").css("border", "5px solid rgb(163, 60, 0)");
    grid.src = "./npc.html";
}