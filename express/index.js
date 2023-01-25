const express = require("express");
const cors = require("cors");
const { log } = require("console");

const port = 4000;
const app = express();

app.use(cors());

app.get("/", (request, response) => {
  // response.send("Hello world")
  response.json([
    {
      status: true,
      result: [{ id: 1, title: "lorem index.js", name: "Bebe", age: "18" }],
    },
  ]);
});


//SUM
app.get("/add", (request, response)=> {
    const{a, b} = request.query;

    let nemeh = Number(a) + Number(b);
    response.json({ value: nemeh});
});

app.get("/api", (request, response)=> {
    const {id} = request.query;
    console.log(id);
    console.log("api is running");
    response.json({status: true});
});


//MIN
app.get("/add1", (request, response)=> {
    const{c, d} = request.query;

    let hasah = Number(c) - Number(d);
    response.json({ value: hasah});
});
app.get("/api1", (request, response)=> {
    const {id} = request.query;
    console.log("api is running");
    response.json({status: true});
});




//huwaah
app.get("/add2", (request, response)=> {
    const{e, f} = request.query;

    let huwaah = Number(e) / Number(f);
    response.json({ value: huwaah});
});
app.get("/api2", (request, response)=> {
    const {id} = request.query;
    console.log("api is running");
    response.json({status: true});
});


//vrjih
app.get("/add3", (request, response)=> {
    const{g, h} = request.query;

    let huwaah = Number(g) * Number(h);
    response.json({ value: huwaah});
});
app.get("/api3", (request, response)=> {
    const {id} = request.query;
    console.log("api is running");
    response.json({status: true});
});



app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
