function addBlog() {
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var imageInfo = document.getElementById("img").files[0].name;
    console.log(title)
    console.log(article);
    console.log(imageInfo);

    var table = document.getElementById("blogsdiv");
    var row = table.insertRow(0);
    var x = row.insertCell(-1);
    x.innerHTML = title;
    var y = row.insertCell(0);
    y.innerHTML = article;
    y.setAttribute("class", "font")
    x.appendChild(y);
    var j = document.createElement("IMG"); 
    j.setAttribute("src", imageInfo); 
    j.setAttribute("width", "420"); 
    j.setAttribute("height", "410"); 
    j.setAttribute("alt", "The Pulpit Rock"); 
    x.appendChild(j);
    x.setAttribute("class", "box");
    localStorage.setItem("empInfo", x);
    resetData();
}

function resetData() {
    document.getElementById("title").value = "";
    document.getElementById("article").value = "";
    document.getElementById("img").value = "";
}