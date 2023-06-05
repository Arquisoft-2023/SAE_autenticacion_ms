const ldapconfig = {
  url: "ldap://sae_ldap:389/",
  base: "dc=unal,dc=edu,dc=co",
  dn: "cn=admin,dc=unal,dc=edu,dc=co",
  password: "admin"
};

module.exports = {
  ldapconfig
};
