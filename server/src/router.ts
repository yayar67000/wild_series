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

import sayActions from "./modules/say/sayActions";
router.get("/", sayActions.sayWelcome);
/* ************************************************************************* */
import programActions from "./modules/program/programActions";
router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);
router.put("/api/programs/:id", programActions.edit);
router.post("/api/programs/:title", programActions.add);
router.delete("/api/programs/:id", programActions.destroy);
//Declaration de la route api/programs

import categorieActions from "./modules/category/categorieActions";

router.get("/api/categories", categorieActions.browse);
router.get("/api/categories/:id", categorieActions.read);
router.put(
  "/api/categories/:id",
  categorieActions.validate,
  categorieActions.edit,
);
router.post("/api/categories", categorieActions.validate, categorieActions.add);
router.delete("/api/categories/:id", categorieActions.destroy);

export default router;
