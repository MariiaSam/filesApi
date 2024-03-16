import fs from "fs/promises";
import path from "path";
import HttpError from "../helpers/HttpError.js";

const folderPath = path.resolve("./files");

export const createFile = async (req, res, next) => {
  const { content, fileName } = req.body;

  const filePath = path.resolve("./files", fileName);

  try {
    await fs.writeFile(filePath, content);
    res.status(201).json({ message: "File created successfully" });
  } catch (error) {
    next(error);
  }
};

export const getFiles = async (req, res, next) => {
  try {
    const result = await fs.readdir(folderPath);

    if (result.length === 0) {
      throw HttpError(404, "Folder not found empty");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

// export const deleteContact = (req, res) => {};

// export const createContact = (req, res) => {};

// export const updateContact = (req, res) => {};
