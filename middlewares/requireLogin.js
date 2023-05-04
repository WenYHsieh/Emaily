module.exports = (req, res, next) => {
  if (!req.user) return res.status(401).send({ error: 'You must LOG IN !' })
  // pass req to next middleware
  next()
}
