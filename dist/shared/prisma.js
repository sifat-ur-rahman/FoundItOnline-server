"use strict";
//import { PrismaClient } from "@prisma/client";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../prisma/generated/client");
//import { PrismaClient } from './prisma/generated/client'
const prisma = new client_1.PrismaClient();
exports.default = prisma;
