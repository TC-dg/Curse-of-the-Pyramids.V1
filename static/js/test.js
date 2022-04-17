var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

var count = 0;

btn.addEventListener("click", () => {
    count = count + 1;
    alert(count);
    list.innerHTML = list.innerHTML + `
    <div class="article" id="${count}">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
        <hr>
    </div>
    `
})

var clear = document.getElementById("clear");
var clearbtn = document.getElementById("clearbtn");

clearbtn.addEventListener("click", () => {
    var obj = document.getElementById(`${clear.value}`);
    var pobj = obj.parentNode;
    pobj.removeChild(obj);
})