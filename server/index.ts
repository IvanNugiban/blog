import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import articlesRoutes from "./routes/articleRoutes"
import categoriesRoutes from "./routes/categoriesRoutes";
import emailRoutes from "./routes/emailRoutes";
import projectsRoutes from "./routes/projectsRoutes";
import helmet from "helmet";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5050;
const dbUrl = process.env.dbUrl || ""

app.use(cors({
    origin: process.env.baseUrl,
    credentials: true
}));
app.use(express.json());
app.use(helmet())
app.use("/api/email", emailRoutes);
app.use("/api/articles", articlesRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/projects", projectsRoutes);
app.options('/*', (_, res) => {
    res.sendStatus(200);
});

app.listen(PORT, async () => {
    try {
        await mongoose.connect(dbUrl)
    } catch (e) {
        console.log(e);
    }
})

