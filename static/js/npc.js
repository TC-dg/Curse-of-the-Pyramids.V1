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