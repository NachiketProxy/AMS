import express from "express";


const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("about.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/adminlogin", (req, res) => {
    res.render("adminlogin.ejs");
});

app.get("/teacherlogin", (req, res) => {
    res.render("teacherlogin.ejs");
});

app.get("/adminDashboard", (req, res) => {
    res.render("adminDashboard.ejs");
});

app.get("/teacherDashboard", (req, res) => {
    res.render("teacherDashboard.ejs");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})