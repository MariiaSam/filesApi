import express from "express";
import validateBody from "../helpers/validateBody.js";
import { createFilesSchema } from "../schemas/filesSchema.js";

import { createFile, getFiles } from "../controllers/filesControllers.js";

import { checkExtension } from "../middlewares/checkExtension.js";

const filesRouter = express.Router();

filesRouter.post(
  "/",
  validateBody(createFilesSchema),
  checkExtension,
  createFile
);

filesRouter.get("/", getFiles);

// contactsRouter.get("/:id", getOneContact);

// contactsRouter.delete("/:id", deleteContact);

// contactsRouter.post("/", createContact);

// contactsRouter.put("/:id", updateContact);

export default filesRouter;
