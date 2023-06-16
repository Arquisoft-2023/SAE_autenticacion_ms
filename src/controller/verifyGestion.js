const express = require("express");
const router = express.Router();
const { ldapconfig } = require("../config/LDAP");

router.post("/verifyLDAP", async (req, res) => {
  //console.log(req.body);
  if (req.body.usuario_un) {
    const username = req.body.usuario_un;
    try {
      const isValid = await checkCredentials(username);
      if (isValid) {
        console.log("Existe en el LDAP");
        return res.status(200).json({
          ldapRes: true
        });
      } else {
        console.log("No Existe en el LDAP");
        return res.status(401).json({
          ldapRes: false
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: `Error ${error}`
      });
    }
  } else {
    return res.status(404).json({
      message: "Error al verificar"
    });
  }
});

async function checkCredentials(username) {
  const SimpleLDAP = await import("simple-ldap-search").then(
    (module) => module.default
  );
  const simpleLdap = new SimpleLDAP(ldapconfig);
  const filter = `(uid=${username})`;
  const attributes = ["dn"];
  const [user] = await simpleLdap.search(filter, attributes);
  if (!user) {
    return false;
  } else {
    return true;
  }
}
module.exports = router;
