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

export const getFileInfo = async (req, res, next) => {
  const { fileName } = req.params;
  try {
    const result = await fs.readdir(folderPath);
    const include = result.includes(fileName);
    if (!include) {
      throw HttpError(404, `File ${fileName} not found`);
    }

    const filePath = path.resolve("./files", fileName);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const extension = path.extname(filePath);
    const file = path.basename(filePath, extension);
    const { size } = await fs.stat(filePath);

    res.json({ content: fileContent, name: file, extension, size });
  } catch (error) {
    next(error);
  }
};
