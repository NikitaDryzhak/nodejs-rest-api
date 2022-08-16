const RequestError = (status, message) => {
  const error = new Error("Not found");
  error.status = 404;
  throw error;
};

module.exports = RequestError;
