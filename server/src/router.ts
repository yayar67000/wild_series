import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

// Declaration of a "Welcome" route

import sayActions from "./modules/item/sayActions";
router.get("/", sayActions.sayWelcome);
/* ************************************************************************* */
import programActions from "./modules/item/programActions";
router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);
//Declaration de la route api/programs

import categorieActions from "./modules/item/categorieActions";
router.get("/api/categories", categorieActions.browse);
router.get("/api/categories/:id", categorieActions.read);

export default router;
