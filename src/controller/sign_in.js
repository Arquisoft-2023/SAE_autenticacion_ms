const express = require("express");
const router = express.Router();
const { firmar_token } = require("../middleware/manejo_token");
const { ldapconfig } = require("../config/LDAP");
const ldap = require("ldapjs");

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  if (req.body.usuario_un && req.body.password) {
    const username = req.body.usuario_un;
    const password = req.body.password;
    try {
      const isValid = await checkCredentials(username, password);
      if (isValid) {
        console.log("Existe en el LDAP");
        const token = await firmar_token(username);
        return res.status(200).json({
          ldapRes: true,
          usuario_un: req.body.usuario_un,
          token: token
        });
      } else {
        console.log("No Existe en el LDAP");
        return res.status(401).json({
          ldapRes: false,
          message: "Credenciales Inválidas"
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: `Error ${error}`
      });
    }
  } else {
    return res.status(404).json({
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
    console.log("Error !USER");
    return false;
  } else {
    return new Promise((resolve, reject) => {
      client.bind(user.dn, password, (err) => {
        if (err) {
          // console.log("Error BIND: " + err);
          resolve(false);
          client.destroy();
        } else {
          resolve(true);
          client.unbind();
          client.destroy();
        }
      });
    });
  }
}

module.exports = router;
