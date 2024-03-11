import { Router } from "express";
import { createUser, loginUser } from "../controllers/auth.ts";
import { check } from "express-validator";
import { validateInputs } from "../middlewares/validateInputs.ts";

export const authRouter = Router();

authRouter.post(
    "/register",
    [
        check("nickname", "Nickname is required").not().isEmpty(),
        check("email", "Email is required").isEmail(),
        check("password", "The password must be 6 digits long").isLength({ min: 6 }),
        validateInputs,
    ],
    createUser
);

authRouter.get("/login", 
[
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateInputs,
],loginUser);
