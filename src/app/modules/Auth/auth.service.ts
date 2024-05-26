import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpars/jwtHelpers";
import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

const loginUser = async (payload: {
  usernameOrEmail: string;
  password: string;
}) => {
  const userData = await prisma.user.findFirst({
    where: {
      OR: [
        { email: payload.usernameOrEmail },
        { username: payload.usernameOrEmail },
      ],
    },
  });
  if (!userData) {
    throw new ApiError(httpStatus.NOT_FOUND, "User dose not exist");
  }
  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    userData.password
  );

  if (!isCorrectPassword) {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, "Your Password incorrect!");
  }
  const accessToken = jwtHelpers.generateToken(
    {
      email: userData.email,
      role: userData.role,
      userId: userData.id,
      userName: userData.name,
    },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string
  );
  const { password: _, ...user } = userData;

  const responsesData = {
    id: user.id,
    name: user.name,
    role: userData.role,
    username: user.username,
    email: user.email,
    accessToken,
  };
  return responsesData;
};
const changePassword = async (payload: {
  email: string;
  currentPassword: string;
  newPassword: string;
}) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });
  if (!userData) {
    throw new ApiError(httpStatus.NOT_FOUND, "User dose not exist");
  }

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.currentPassword,
    userData.password
  );

  if (!isCorrectPassword) {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, "Your Password incorrect!");
  }

  const hashedPassword: string = await bcrypt.hash(payload.newPassword, 12);

  await prisma.user.update({
    where: {
      email: userData.email,
    },
    data: {
      password: hashedPassword,
    },
  });
  const { password: _, ...user } = userData;
  return {
    user,
  };
  // return responsesData;
};

export const AuthServices = {
  loginUser,
  changePassword,
};
