import express from "express";
import path from "path";

const PORT = process.env.PORT || 8080;

const app = express();

const __dirname = path.resolve();

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)