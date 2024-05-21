import express from "express";
import { userRoutes } from "../modules/User/user.routes";

import { AuthRoutes } from "../modules/Auth/auth.routes";
import { LostItemRoutes } from "../modules/LostItem/lostItem.routes";
import { ReportRoutes } from "../modules/FoundItem/foundItem.routes";
import { ClaimRoutes } from "../modules/Claim/claim.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: userRoutes,
  },
  {
    path: "/",
    route: LostItemRoutes,
  },
  {
    path: "/",
    route: AuthRoutes,
  },
  {
    path: "/",
    route: ReportRoutes,
  },
  {
    path: "/",
    route: ClaimRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
