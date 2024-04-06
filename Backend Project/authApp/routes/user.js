const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/auth");
const { auth, isStudent, isAdmin } = require("../middlewares/middleAuth");

router.post("/login", login);
router.post("/signup", signup);

// testing route for single middleware
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the protected route for TEST",
  });
});

// protected routes
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the protected route for students",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the protected route for admin",
  });
});

router.get("/getemail", auth, (req, res) => {
  const id = req.user.id;
  console.log(id);
});

module.exports = router;
