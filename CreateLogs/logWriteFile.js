let newLog = () => {
    let fs = require("fs");
    let obj = require("readline-sync");
    var i = 1;
    let count = obj.question("Enter the number of records you want to enter: ");
    debugger;
    let emp1 = new Array();
    var today = new Date();
    while (i <= count) {
        var emp = new Array();
        var id = Number(obj.question("Enter the id: "));
        debugger;
        let name = obj.question("Enter the name: ");
        var age = Number(obj.question("Enter the age: "));
        var todayDate = new Date().toISOString().slice(0, 10);
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        emp.push({ id: id, "Name": name, "Age": age, "Date": todayDate, "Time": time });
        i++;
        emp1.push(emp);
    }
    debugger;
    let jsonData = JSON.stringify(emp1);
    fs.writeFileSync("log.json", "\n" + jsonData);
    console.log('file written');

    let log = new Array();
    let data = fs.readFileSync("log.json");
    debugger;
    let jsonString = data.toString();
    let anotherJSON = JSON.parse(jsonString);
    for (let i = 0; i < anotherJSON.length; i++) {
        log.push(anotherJSON[i])
    }
}

module.exports = { newLog }