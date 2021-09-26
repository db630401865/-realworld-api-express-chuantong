module.exports = async (req, res, next) => {
  // 检查有没有session user
  const seesionUser = req.session.user
  if (seesionUser) {
    return res.redirect('/')
  }
  next()
}
