const errorHandler = (err, req, res) => {
  const { status = "error", statusCode = 500, message } = err;

  res.status(statusCode).json({
    status,
    message,
  });
};

module.exports = errorHandler;
