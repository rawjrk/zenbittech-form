const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router
  .route("/")
  .get(controllers.getAllRequests)
  .post(controllers.postNewRequest);

router.route("/:id").get(controllers.getRequestById);

module.exports = router;
