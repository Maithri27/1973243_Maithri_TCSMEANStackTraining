let http = require("http");
let url = require("url");
let fs = require("fs");
let port = 9999;

let arrayStore = new Array()
let loginInfo = `
<head>
<h2>Task Planner </h2>
</head>
<style>
table, th, td {
	border: 1px black solid;
}
table {
	border-collapse: collapse;
}
h2 {
    color: black;
    font-style: italic;
    font-size: 40px; 
    line-height: 50px; 
    font-weight: normal; 
    margin-bottom: 0px; 
    margin-top: 8px; 
    text-align: center; 
}
.container {
    width: 300px;
    clear: both;
  }
  
  .container input {
    width: 100%;
    clear: both;
  }
  h4{
    color: black;
    font-style: italic;
    font-size: 20px; 
    line-height: 25px; 
    font-weight: normal; 
    margin-bottom: 0px; 
    margin-top: 4px; 
    text-align: center
  }


</style>
<div class="container">
<h4>Add Tasks</h4>
        <form action="/store" method="get">
        <label>Employee Id: 
        <input type="number" name="empId" /><br/>
        <label>Task Id:
        <input type="number" name="taskId" /><br/>
        <label>Task:
        <input type="text" name="task" /><br/>
        Deadline: 
        <input type="datetime-local" id="deadline" name="deadline" /><br/>
</div>
        <input type="submit" value="Add Task" />
        <input type="reset" value="Reset" />
        </form>
<hr/>
<div class="container">
<h4>Delete Tasks</h4>
        <form action="/delete" method="get" >
        <label>Task Id: </label>
        <input type="number" name="taskId" /><br/>
</div>
        <input type="submit" value="Delete Task" />
        </form>
        <hr/>
        <form action="/display" method= "get">
        <div class="container">
        <h4 style= "margin-bottom :7px;">Show Tasks</h4>
        </div>
        <input type="submit" value="Show All Tasks" /><br/>
    
        </form>
    
`

class Task {
    constructor(empId, taskId, task, deadline) {
        this.empId = empId
        this.taskId = taskId
        this.task = task
        this.deadline = deadline
    }
}
let server = http.createServer((req, res) => {
    var pathInfo = url.parse(req.url, true).pathname;
    if (req.url != '/favicon.ico') {
        res.setHeader("content-type", "text/html"); // by default data consider as a html 
        res.write(loginInfo);
        if (pathInfo == "/store") {
            var data = url.parse(req.url, true).query;
            let storeData = new Task(data.empId, data.taskId, data.task, data.deadline)
            arrayStore.push(storeData)
            let taskString = JSON.stringify(arrayStore)
            fs.writeFileSync("task.json", taskString)
                //console.log("Record stored successfully...")
            res.end()

        } else if (pathInfo == "/delete") {
            var data = url.parse(req.url, true).query;
            let read = fs.readFileSync("task.json");
            let taskString = read.toString()
            let taskJson = JSON.parse(taskString);
            // console.log(data.taskId)
            // console.log(taskJson[0].taskId);
            var data1 = data.taskId;
            var i = taskJson.length
            while (i--) {
                if (data1.indexOf(taskJson[i].taskId) != -1) {
                    taskJson.splice(i, 1);
                }
            }
            let storeData = JSON.stringify(taskJson)
            fs.writeFileSync("task.json", storeData)
            console.log(storeData)
            res.end()

        } else if (pathInfo == "/display") {
            var data = url.parse(req.url, true).query;
            let read = fs.readFileSync("task.json");
            let taskString = read.toString()
            let taskJson = JSON.parse(taskString);
            let displayTable = `
        <div>
            <table style= "border : solid;">
                <thead style= "border : solid;">
                    <tr style= "border : solid;">
                    <th>Employee Id</th>
                    <th>Task Id</th>
                    <th>Task</th>
                    <th>Deadline</th>
                    </tr>
                </thead>
            <tbody>
        `
            for (let i = 0; i < taskJson.length; i++) {
                displayTable += ` 
        
        <tr style= "border : solid;">
            <td>${taskJson[i].empId}</td>
            <td>${taskJson[i].taskId}</td>
            <td>${taskJson[i].task}</td>
            <td>${taskJson[i].deadline}</td>
        </tr>`
            }
            displayTable += `                         
                </table>
                </div>
            </div>
        </div>
         `
            res.write(displayTable)
            res.end()
        }
    }

});
server.listen(port, () => console.log(`Server is running on port number ${port}`));