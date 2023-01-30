const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.use(express.json());

const file = "./data.json";


app.post("/user", (req, res) => {
  const body = req.body;

  fs.readFile("./data.json", "utf-8", (readErr, data) => {
    console.log(readErr);
    if (readErr) {
      res.json({ status: "false", message: readErr });
    }


    const obj = data ? JSON.parse(data) : [];
    console.log(data);

    // const newUser = {
    //   id: data ? obj.length + 1 : 1,
    //   name: `Sergelen`,
    // };

    // obj.push(newUser);


    const {name} = req.body;
    let id = obj.length + 1;
    obj.push({id, name});


    fs.writeFile(file, JSON.stringify(obj), (err) => {
      if (err) {
        res.json({ status: "false", message: err });
      }

      res.json({ status: true, result: obj });
    });
  });
});






app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
