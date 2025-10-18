import { Router } from "express";
import { getAllClubs, getClubByName, getClubPlayers, getPlayerByName } from "../controllers/clubController.js";

const router = Router();

router.get("/clubs", getAllClubs);
router.get("/clubs/:name", getClubByName);
router.get("/clubs/:name/players", getClubPlayers);
router.get("/clubs/:clubName/players/:playerName", getPlayerByName); 

export default router;
