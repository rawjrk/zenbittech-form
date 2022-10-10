const express = require("express");
const controllers = require("../controllers");

const router = express.Router();

router
  .route("/")
  .get(controllers.getAllRequests)
  .post(controllers.postNewRequest);

router.route("/:id").get(controllers.getRequestById);

module.exports = router;
