const conn = require("../services/db");
const AppError = require("../utils/AppError");

module.exports.getAllRequests = (req, res, next) => {
  conn.query("SELECT * FROM request", function (err, data, fields) {
    if (err) return next(new AppError(err));

    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

module.exports.getRequestById = (req, res, next) => {
  conn.query(
    "SELECT * FROM request WHERE id = ?",
    [req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err));

      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};

module.exports.postNewRequest = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));

  const { name, email, message } = req.body;

  let missingFields = [];
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
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));

      res.status(201).json({
        status: "success",
        message: "request created!",
      });
    }
  );
};
