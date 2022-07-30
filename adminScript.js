var table = document.getElementById("table");
var fetchData = JSON.parse(localStorage.getItem("dataList"));
//console.log(fetchData);
for(var i=0; i<fetchData.length; i++){
    table.innerHTML +="<tr><td>" + fetchData[i].name + "</td><td>" + fetchData[i].email + "</td><td>" + fetchData[i].age + "</td><td>" + fetchData[i].phone + "</td><td>" + fetchData[i].adhaar + "</td><td>" + fetchData[i].address + "</td><td>" + fetchData[i].date + "</td></tr>";
}