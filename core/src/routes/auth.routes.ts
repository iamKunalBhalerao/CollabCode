import { Router } from "express";

const authRouter: Router = Router();

authRouter.route("/signup").post();
authRouter.route("/signin").post();
authRouter.route("/logout").post();
authRouter.route("/refresh-account").post();

export default authRouter;
