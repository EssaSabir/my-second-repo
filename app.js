var dataList = [];

function Add() {
    var d = document.getElementById("simple").value;
    var adding = document.getElementById("listparent");
    console.log(d)

    if (d !== "") {
        dataList.push(d);

        adding.innerHTML = "";

        for (var i = 0; i < dataList.length; i++) {
            adding.innerHTML += "<li>" + dataList[i] + "</li>";
        }

        document.getElementById("simple").value = "";
    }
}