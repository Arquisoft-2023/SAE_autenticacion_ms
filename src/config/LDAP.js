const ldapconfig = {
  url: "ldap://localhost:389/",
  base: "dc=unal,dc=edu,dc=co",
  dn: "cn=admin,dc=unal,dc=edu,dc=co",
  password: "admin"
};

module.exports = {
  ldapconfig
};
