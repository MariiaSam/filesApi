import fs from "fs/promises";
import path from "path";

export const createFile = async (req, res, next) => {
  const { content, fileName } = req.body;

  const filePath = path.resolve("./files", fileName);

  try {
    await fs.writeFile(filePath, content);
    res.status(201).json({ message: "File created successfully" });
  } catch (error) {

    next(error)
  }
  
};

// export const getOneContact = (req, res) => {};

// export const deleteContact = (req, res) => {};

// export const createContact = (req, res) => {};

// export const updateContact = (req, res) => {};
