import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import express from "express";

interface Request extends express.Request {
  decoded?: any;
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["x-access-token"] || req.query.token || req.body.token;
  console.log(token);
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "not logged in"
    });
  }

  const p = new Promise((resolve, reject) => {
    jwt.verify(token, req.app.get("jwt-secret"), (err: Error, decoded: any) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  // if it has failed to verify, it will return an error message
  const onError = (error: ErrorEvent) => {
    res.status(403).json({
      success: false,
      message: error.message
    });
  };

  // process the promise
  p.then((decoded: any) => {
    req.decoded = decoded;
    console.log(decoded);
    next();
  }).catch(onError);
};

export default auth;
