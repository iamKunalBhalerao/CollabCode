import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/errors";
import type { TokenPayload } from "../types/auth.types";

export const generateAccessToken = ({ id, email }: TokenPayload) => {
  try {
    return jwt.sign(
      {
        id,
        email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "15m",
      },
    );
  } catch (error) {
    throw new BadRequestError("Error while generating AccessToken!");
  }
};

export const generateRefreshToken = ({ id, email }: TokenPayload) => {
  try {
    return jwt.sign(
      {
        id,
        email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      },
    );
  } catch (error) {
    throw new BadRequestError("Error while generating AccessToken!");
  }
};

export const generateTokens = (payload: TokenPayload) => {
  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload),
  };
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
};

export const verifyRefreshToken = (refreshToken: string) => {
  return jwt.verify(refreshToken, process.env.JWT_SECRET!) as TokenPayload;
};
