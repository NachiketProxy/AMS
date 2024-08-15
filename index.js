import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure EJS and static file serving
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", (req, res) => res.render("about"));
app.get("/login", (req, res) => res.render("login"));
app.get("/adminlogin", (req, res) => res.render("adminlogin"));
app.get("/teacherlogin", (req, res) => res.render("teacherlogin"));
app.get("/adminDashboard", (req, res) => res.render("adminDashboard"));
app.get("/teacherDashboard", (req, res) => res.render("teacherDashboard"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).send('Something broke!');
});

// Export the app as a serverless function
export default (req, res) => app(req, res);
