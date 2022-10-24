import express, { Response, Request } from "express";

const router = express.Router();

router.get("/api/birdsquawk/get", (req: Request, res: Response) => {
  console.log("/api/birdsquawk/get");
  res.send("ok");
});
router.post("/api/birdsquawk/post", (req: Request, res: Response) => {
  console.log("/api/birdsquawk/post");
  res.send("ok");
});

export { router };
