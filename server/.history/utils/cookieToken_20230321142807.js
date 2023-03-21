const cookieToken = (customer, res) => {
  const token = customer.getJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: "none",
  };

  customer.password = undefined;
  res.status(200).cookie("token", token, options).json({
    success: true,
    token,
    customer,
  });
};

module.exports = cookieToken;
