var username;
var team = {name:""};
$(".content").css("dispaly", "none");
$(".content").css("border", "0px");
// var falg = new Boolean(false);
var a = [];
var b = [];

function reset(team) {
    username = document.getElementById("Username").value;
    a = [];
    a.push(username);
    alert(a[0]);
    b = a;
    alert("b[0] = " + b[0]);
    team.name = username;
}
// alert("username = " + username);
// alert(a[0]);
// console.log(a);
// alert("b[0] = " + a[0]);

// alert(team.name);

document.getElementById("tn_display").innerHTML = "隊伍:Team01";

function home() {
    $("#f01").css("border", "0px");
    $("#f02").css("border", "0px");
    $("#f03").css("border", "0px");
    $("#f04").css("border", "0px");
    $("#f05").css("border", "0px");
    // $("#f06").css("border", "2px solid white");
    $(".content").css("border", "0px");
    grid.src = "";
}

function npc() {
    $("#f06").css("border", "0px");
    $("#f02").css("border", "0px");
    $("#f03").css("border", "0px");
    $("#f04").css("border", "0px");
    $("#f05").css("border", "0px");
    $("#f01").css("border", "2px solid white");
    $(".content").css("border", "5px solid rgb(163, 60, 0)");
    grid.src = "./npc.html";
}

function input() {
    $("#f01").css("border", "0px");
    $("#f06").css("border", "0px");
    $("#f03").css("border", "0px");
    $("#f04").css("border", "0px");
    $("#f05").css("border", "0px");
    $("#f02").css("border", "2px solid white");
    $(".content").css("border", "5px solid rgb(163, 60, 0)");
    grid.src = "./input.html";
}

function bag() {
    $("#f01").css("border", "0px");
    $("#f02").css("border", "0px");
    $("#f06").css("border", "0px");
    $("#f04").css("border", "0px");
    $("#f05").css("border", "0px");
    $("#f03").css("border", "2px solid white");
    $(".content").css("border", "5px solid rgb(163, 60, 0)");
    grid.src = "./npc.html";
}

function map() {
    $("#f01").css("border", "0px");
    $("#f02").css("border", "0px");
    $("#f03").css("border", "0px");
    $("#f06").css("border", "0px");
    $("#f05").css("border", "0px");
    $("#f04").css("border", "2px solid white");
    $(".content").css("border", "5px solid rgb(163, 60, 0)");
    grid.src = "./npc.html";
}

function mission() {
    $("#f01").css("border", "0px");
    $("#f02").css("border", "0px");
    $("#f03").css("border", "0px");
    $("#f04").css("border", "0px");
    $("#f06").css("border", "0px");
    $("#f05").css("border", "2px solid white");
    $(".content").css("border", "5px solid rgb(163, 60, 0)");
    grid.src = "./npc.html";
}

function A() {
    alert("清除守衛");
    var obj = document.getElementById("1");
    var pobj = obj.parentNode;
    // pobj.innerHTML = pobj.innerHTML + `
    // <tr>
    //     <th>NPC</th>
    //     <th>介紹</th>
    // </tr>
    // `;
    pobj.removeChild(obj);
    // console.log(obj.innerHTML);
}

function submit(){
    alert("提交成功");
}
// var title = document.getElementById("title");
// var content = document.getElementById("content");
// var btn = document.getElementById("btn");
// var list = document.getElementById("list");

// var count = 0;

// btn.addEventListener("click", () => {
//     count = count + 1;
//     alert(count);
//     list.innerHTML = list.innerHTML + `
//     <div class="article" id="${count}">
//         <h2>${title.value}</h2>
//         <p>${content.value}</p>
//         <hr>
//     </div>
//     `
// })

// var clear = document.getElementById("clear");
// var clearbtn = document.getElementById("clearbtn");

// clearbtn.addEventListener("click", () => {
//     var obj = document.getElementById(`${clear.value}`);
//     var pobj = obj.parentNode;
//     pobj.removeChild(obj);
// })