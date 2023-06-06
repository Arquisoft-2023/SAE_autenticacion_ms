const ldapconfig = {
  url: "ldap://sae-ldap:389",
  base: "dc=sae,dc=unal,dc=edu,dc=co",
  dn: "cn=admin,dc=sae,dc=unal,dc=edu,dc=co",
  password: "admin"
};

module.exports = {
  ldapconfig
};
