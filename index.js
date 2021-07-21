const express = require("express");
const router = express();
const port = process.env.PORT || 3000;
router.get("/", (req, res) => {
  res.send(process.env.APPSETTING_NANDA);
});

router.listen(port, () => {
  console.log("server up!");
});
