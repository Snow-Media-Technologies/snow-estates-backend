const isCelebrate = require('celebrate');

const joiErrors = () => (err, req, res, next) => {
  if (!isCelebrate.isCelebrateError(err)) return next(err);

  const array = Array.from(err.details, ([name, value]) => ({ name, value }));
  const errorValue = array[0].value.details[0].message

  return res.status(400).json({
    success: false,
    message: 'Bad Request',
    errFields: errorValue || undefined,
  });
};
module.exports = { joiErrors }