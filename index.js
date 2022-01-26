// JavaScript source code
var express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());
const port = 8089;

var data_module = require("./user.js");
const detail = data_module.data;
app.use(express.json());

app.listen(process.env.PORT || port, () => {
    console.log("listening 8089...");
});

app.get("/", (req, res) => {
	res.send(window.location.href = "index1.html");
});
app.route("/vals")
    .get(async (req, res) => {
        let data = await detail.find();
        console.log(await detail);
        console.log(data);
        res.send(data);
    })
    .post(async (req, res) => {
        console.log(req.body);
        let s = new detail(req.body);
        let result = await s.save();
        res.send(result);
    })
    .put(async (req, res) => {
        console.log(req.body);
        let s = await detail.updateOne({ "rollNo": req.body.rollNo}, {
            "$set": {
                "cName": req.body.cName, "city": req.body.city, "interest": req.body.interest, "age": req.body.age, 
                "education": req.body.education, "contact": req.body.contact
            }
        })
        res.send(s);
    })
    .delete(async (req, res) => {
        let d = await detail.deleteOne({ "_id": req.body._id });
        res.send(d);
        console.log(d);
    })
app.get("/vals/:id", async (req, res) => {
    console.log(req.params.rollNo);
    // console.log("in index :id");
    let data = await detail.find({"_id": req.params.id });
    res.send(data[0]);
})