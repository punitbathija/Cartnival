const cookieToken = (user, res) => {
  const token = user.getJwtToken();
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_TIME * 24 * 60 * 1000),
    httpOnly: true,
  };
};
