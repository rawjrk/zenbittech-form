const conn = require("../services/db");
const AppError = require("../utils/AppError");

module.exports.getAllRequests = (req, res, next) => {
  conn.query("SELECT * FROM request", (err, data) => {
    if (err) return next(new AppError(err));

    res.status(200).json({
      status: "success",
      length: data?.length,
      data,
    });
  });
};

module.exports.getRequestById = (req, res, next) => {
  conn.query(
    "SELECT * FROM request WHERE id = ?",
    [req.params.id],
    (err, data) => {
      if (err) return next(new AppError(err));

      res.status(200).json({
        status: "success",
        length: data?.length,
        data,
      });
    }
  );
};

module.exports.postNewRequest = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));

  const { name, email, message } = req.body;

  const missingFields = [];
  if (!name) missingFields.push("name");
  if (!email) missingFields.push("email");
  if (!message) missingFields.push("message");

  if (missingFields.length > 0) {
    return next(
      new AppError(
        `Missing required field(s): ${missingFields.join(", ")}`,
        404
      )
    );
  }

  const values = [name, email, message];

  conn.query(
    "INSERT INTO request (name, email, message) VALUES(?)",
    [values],
    (err) => {
      if (err) return next(new AppError(err, 500));

      res.status(201).json({
        status: "success",
        message: "request created!",
      });
    }
  );
};
