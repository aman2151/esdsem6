// JavaScript source code
//const api_url = "<heroku_app_url>"

const api_url = "https://testjanload.herokuapp.com/vals";
function loadData(records = []) {
    var table_data = "";
    for (let i = 0; i < records.length; i++) {
        table_data += `<tr>`;
        table_data += `<td>${records[i].rollNo}</td>`;
        table_data += `<td>${records[i].cName}</td>`;
        table_data += `<td>${records[i].city}</td>`;
        table_data += `<td>${records[i].interest}</td>`;
        table_data += `<td>${records[i].age}</td>`;
        table_data += `<td>${records[i].education}</td>`;
        table_data += `<td>${records[i].contact}</td>`;
        table_data += `<td>`;
        table_data += `<a href="edit.html?id=${records[i]._id}"><button
class="btn btn-primary">Edit</button></a>`;
        table_data += '&nbsp;&nbsp;';
        table_data += `<button class="btn btn-danger"
onclick=deleteData('${records[i]._id}')>Delete</button>`;
        table_data += `</td>`;
        table_data += `</tr>`;
    }
    //console.log(table_data);
    document.getElementById("tbody").innerHTML = table_data;
}
function getData() {
    fetch(api_url)
        .then((response) => response.json())
        .then((data) => {
            console.table(data);
            loadData(data);
        });
}
function getDataById(id) {
    fetch(`${api_url}/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("id").value = data._id;
            document.getElementById("rollNo").value = data.rollNo;
            document.getElementById("cName").value = data.cName;
            
            document.getElementById("city").value = data.city;
            document.getElementById("interest").value = data.interest;
            
            document.getElementById("age").value = data.age;
            document.getElementById("education").value = data.education;
            document.getElementById("contact").value = data.contact;
        })
}
function postData() {
    var rollNo = document.getElementById("rollNo").value;
    var cName = document.getElementById("cName").value;
    
    var city = document.getElementById("city").value;
    var interest = document.getElementById("interest").value;
    
    var age = document.getElementById("age").value;
    var education = document.getElementById("education").value;
    var contact = document.getElementById("contact").value;
    data = {
        rollNo: rollNo, cName: cName,  city: city, interest:
        interest, age: age, education: education, contact: contact
    };
    fetch(api_url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            window.location.href = "index1.html";
        })
}
function putData() {
    var _id = document.getElementById("id").value;
    var rollNo = document.getElementById("rollNo").value;
    var cName = document.getElementById("cName").value;
    
    var city = document.getElementById("city").value;
    var interest = document.getElementById("interest").value;
    
    var age = document.getElementById("age").value;
    var education = document.getElementById("education").value;
    var contact = document.getElementById("contact").value;
    data = {
        _id: _id, rollNo: rollNo, cName: cName,  city: city, interest:
        interest, age: age, education: education, contact: contact
    };
    fetch(api_url, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {
            console.table(data);
            window.location.href = "index1.html";
        })
}
function deleteData(id) {
    user_input = confirm("Are you sure you want to delete this record?");
    if (user_input) {
        fetch(api_url, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "_id": id })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                window.location.reload();
            })
    }
}