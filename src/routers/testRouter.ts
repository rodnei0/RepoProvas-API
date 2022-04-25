import { Router } from "express";
import { getTests } from "../controllers/testController.js";

const testRouter = Router();

testRouter.get("/tests", getTests);

export default testRouter;
