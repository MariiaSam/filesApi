import HttpError from "../helpers/HttpError.js";

export const checkExtension = (req, res, next) => {
  const EXTENSIONS = ["html", "css", "doc", "txt", "js"];
console.log(123)
  const result = req.body.fileName;
  const check = result.split(".");

  const extension = check[check.length - 1];


  const validate = EXTENSIONS.includes(extension);
  if (!validate) { 
    const mess = `Sorry this app doesn't support files with ${extension} extension`;
    next(HttpError(400, mess));
    
  }

  next();
};
