module.exports = function(req, res, next) {
    if (req.user.role !== 'admin') {
      return res.status(403).send({ success: false, message: "You are Not an Admin: Admin role required" });
    }
    next();
  };