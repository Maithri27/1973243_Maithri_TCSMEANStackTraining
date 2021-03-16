var empObj = [];
var empString = [];
var totbudget = 0;



function onFormSubmit() {
    //alert("Event generated...")
    var data = readFormData();
    console.log(data);
    empObj.push(data);
    empString = JSON.stringify(empObj);
    storeInSession();
    resetData();

}

function readFormData() {
    var obj = {}; // empty object
    obj.clientname = document.getElementById("clientname").value;
    obj.projectname = document.getElementById("projectname").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    return obj;
}

function resetData() {
    document.getElementById("clientname").value = "";
    document.getElementById("projectname").value = "";
    document.getElementById("budget").value = "";
}



function storeInSession() {
    sessionStorage.setItem("empInfo", empString);
}

function retrieveFromSession() {
    var sessionData = JSON.parse(sessionStorage.getItem("empInfo"));
    for (var i = 0; i < sessionData.length; i++) {
        insertNewRecord(sessionData[i]);
    }
    var table = document.getElementById("employeeList");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);
    var cell1 = newRow.insertCell(0);
    cell1.colSpan = "2";
    cell1.style.textAlign = "right";
    cell1.innerHTML = "totbudget:";
    var cell2 = newRow.insertCell(1);
    //  cell2.style.textAlign = "right";
    cell2.innerHTML = totbudget;
}

function insertNewRecord(data) {

    var table = document.getElementById("employeeList");
    var body = table.getElementsByTagName("tbody")[0];
    console.log(data);
    var newRow = body.insertRow(body.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.clientname;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.projectname;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.budget;
    totbudget = totbudget + parseInt(data.budget);
}