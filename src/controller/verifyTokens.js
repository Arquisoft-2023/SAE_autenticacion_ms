const jwt = require("jsonwebtoken");

router.post("/tokensVerify", async (req, res) => {
  //console.log(req.body);
  if (req.body.tokenDB && req.body.tokenLocalStorage) {
    const tokenDb = req.body.tokenDb;
    const tokenLocalS = req.body.tokenLocalStorage;

    const decodedTokenDB = jwt.decode(tokenDb);
    const decodedTokenLocalS = jwt.decode(tokenLocalS);

    if (JSON.stringify(decodedTokenDB) === JSON.stringify(decodedTokenLocalS)) {
      return res.status(200).json({
        TokenDB: tokenDb,
        TokenLocalS: tokenLocalS,
        verify: true
      });
    } else {
      return res.status(200).json({
        TokenDB: tokenDb,
        TokenLocalS: tokenLocalS,
        verify: false
      });
    }
  }
});
