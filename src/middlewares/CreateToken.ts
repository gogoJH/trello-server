import { salt as secret } from "../config";
import jwt from "jsonwebtoken";

const createToken = (userData: any) => {
  const { username, id } = userData;

  // check the user info & generate the jwt
  // check the user info & generate the jwt

  const p = new Promise((resolve, reject) => {
    jwt.sign(
      {
        id,
        username
      },
      secret,
      {
        expiresIn: "7d",
        issuer: "trello.com",
        subject: "userInfo"
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
  return p;
};

export default createToken;
