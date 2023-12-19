import { Router } from "express";
import * as UsageRecordController from "../controllers/usage-record-controller.js";
const router = Router();

router.post('/', UsageRecordController.postUsageRecord);

export default router;