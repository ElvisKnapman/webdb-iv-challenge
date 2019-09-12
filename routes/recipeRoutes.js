const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "main route" });
});

module.exports = router;
