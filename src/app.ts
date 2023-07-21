import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./modules/user/user.route";
import commentRoute from "./modules/comment/comment.route";
import bookRoute from "./modules/book/book.route";
const app: Application = express();

// Middleware
app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoute);
app.use("/api/v1/comments", commentRoute);
app.use("/api/v1/books", bookRoute);
app.get("/", async (req: Request, res: Response) => {
  res.send(`Hello, You server is running`);
});

// Handle not found route
app.use((req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Not Found",
    errorMessage: [{ path: req.originalUrl, message: "API not found" }],
  });
});

export default app;
