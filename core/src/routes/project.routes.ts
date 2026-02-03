import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  getMyProjectsController,
  getProjectController,
  updateProjectController,
} from "../controllers/project.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const projectRouter: Router = Router();

projectRouter.route("/create").post(authMiddleware, createProjectController);
projectRouter
  .route("/delete/:projectId")
  .delete(authMiddleware, deleteProjectController);
projectRouter
  .route("/update/:projectId")
  .put(authMiddleware, updateProjectController);
projectRouter
  .route("/get/:projectId")
  .get(authMiddleware, getProjectController);
projectRouter
  .route("/my-projects")
  .get(authMiddleware, getMyProjectsController);

export default projectRouter;
