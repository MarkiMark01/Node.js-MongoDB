const HttpError = (status, message) => {
    const error = newError(message);
    error.status = status;
    return error;
}
module.exports = HttpError;