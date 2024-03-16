import express from "express";
import validateBody from "../helpers/validateBody.js";
import {createFilesSchema} from '../schemas/filesSchema.js'

import { createFile } from "../controllers/filesControllers.js";

import { checkExtension } from "../middlewares/checkExtension.js";

// import {
//   getAllContacts,
//   getOneContact,
//   deleteContact,
//   createContact,
//   updateContact,
// } from "../controllers/contactsControllers.js";

const filesRouter = express.Router();

filesRouter.post('/', validateBody(createFilesSchema), checkExtension, createFile)

// contactsRouter.get("/", getAllContacts);

// contactsRouter.get("/:id", getOneContact);

// contactsRouter.delete("/:id", deleteContact);

// contactsRouter.post("/", createContact);

// contactsRouter.put("/:id", updateContact);

export default filesRouter;
