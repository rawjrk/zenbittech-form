const errorHandler = (err, req, res, next) => {
  const { status = "error", statusCode = 500, message } = err;

  res.status(statusCode).json({
    status,
    message,
  });
};

module.exports = errorHandler;
