const express = require("express");
const router = express.Router();
const { firmar_token } = require("../middleware/manejo_token");
const { ldapconfig } = require("../config/LDAP");
const ldap = require("ldapjs");

router.post("/signin", async (req, res) => {
  //console.log(req.body);
  if (req.body.usuario_un && req.body.password) {
    const username = req.body.usuario_un;
    const password = req.body.password;
    try {
      const isValid = await checkCredentials(username, password);
      if (isValid) {
        console.log("Existe en el LDAP");
        const token = await firmar_token(username);
        isValid = false;
        return res.json({
          token: token
        });
      } else {
        console.log("No Existe en el LDAP");
        return res.json({
          message: "Usuario inexistente"
        });
      }
    } catch (error) {
      return res.json({
        message: error
      });
    }
  } else {
    return res.json({
      message: "Error al hacer signin"
    });
  }
});

async function checkCredentials(username, password) {
  const SimpleLDAP = await import("simple-ldap-search").then(
    (module) => module.default
  );

  const client = ldap.createClient({
    url: ldapconfig.url
  });

  const simpleLdap = new SimpleLDAP(ldapconfig);

  const filter = `(uid=${username})`;
  const attributes = ["dn"];
  const [user] = await simpleLdap.search(filter, attributes);
  if (!user) {
    return false;
  } else {
    const resultBind = client.bind(user.dn, password, (err) => {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
    return resultBind;
  }
}
module.exports = router;
