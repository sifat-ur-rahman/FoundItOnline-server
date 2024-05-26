"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/User/user.routes");
const auth_routes_1 = require("../modules/Auth/auth.routes");
const lostItem_routes_1 = require("../modules/LostItem/lostItem.routes");
const foundItem_routes_1 = require("../modules/FoundItem/foundItem.routes");
const claim_routes_1 = require("../modules/Claim/claim.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/",
        route: user_routes_1.userRoutes,
    },
    {
        path: "/",
        route: lostItem_routes_1.LostItemRoutes,
    },
    {
        path: "/",
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: "/",
        route: foundItem_routes_1.ReportRoutes,
    },
    {
        path: "/",
        route: claim_routes_1.ClaimRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
