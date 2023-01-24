const errorHandler = (err, req, res, next) => {
  const statusCode = res.statuscode ? res.statuscode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
  next();
};

module.exports = { errorHandler };
