import { Router } from "express";
import {
  createSnapShotController,
  deleteSnapShotController,
  getSnapShotController,
  updateSnapShotController,
} from "../controllers/snapshot.controller";

const snapShotRouter: Router = Router();

snapShotRouter.route("/create").post(createSnapShotController);
snapShotRouter.route("/get/:snapShotId").get(getSnapShotController);
snapShotRouter.route("/update/:snapShotId").put(updateSnapShotController);
snapShotRouter.route("/delete/:snapShotId").delete(deleteSnapShotController);

export default snapShotRouter;
