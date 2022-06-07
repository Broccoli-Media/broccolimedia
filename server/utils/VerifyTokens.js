import jwt from "jsonwebtoken";
import { CreateError } from "../utils/Error.js";

export function verifyToken(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return next(CreateError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(CreateError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export function verifyUser(req, res, next) {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(CreateError(403, "You are not authorized!"));
    }
  });
};

export function verifyAdmin(req, res, next) {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(CreateError(403, "You are not authorized!"));
    }
  });
};
