const cookieToken = (customer, res) => {
  const token = customer.getJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie("token", token, options);

  customer.password = undefined;

  res.status(200).json({
    success: true,
    token,
    customer,
  });
};

module.exports = cookieToken;
