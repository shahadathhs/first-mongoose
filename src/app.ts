import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

// ** express app **
const app: Application = express();

// ** parse request body **
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ** cors **
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:4173",
      "http://localhost:4174",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// ** middlewares **
const logger = (req: any, res: Response, next: NextFunction) => {
  console.log("Method: ", req.method);
  console.log("URL: ", req.url);
  console.log("Body: ", req.body);
  console.log("Query: ", req.query);
  console.log("Params: ", req.params);
  console.log("Headers: ", req.headers);
  next();
};

// ** routes **
app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World!");
});

// ** Not Found Error Handler **
app.all("*", (req: Request, res: Response) => {
  res.status(404).send("Not Found!");
});

export default app; 