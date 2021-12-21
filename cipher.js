// jshint esversion: 6
const NodeRSA = require('node-rsa');

// const key = new NodeRSA({ b: 1024});
let secret = 'This is my code challenge';

// public key for encryption
// var public_key = key.exportKey('public');

// // private key for decryption
// var private_key = key.exportKey('private');

// console.log(public_key + '\n' + private_key);

public_key = '-----BEGIN PUBLIC KEY-----\n' +
'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZSMKADz3a06UTgEJoUb6tn2iW\n' +
'p3dDkEPJknb6FUXfGLORinWM8BhRi6zNvle6+1NsV4JeAuIFZHNU36B9iIDk4ZWt\n' +
'oWer76DSiByw4JQahiRj1XFM3OXGL/7e3SckKPmryzhxK/3+MVG45M7teUzKFvXX\n' +
'lnIWuhNmNZQf10s5wQIDAQAB\n' +
'-----END PUBLIC KEY-----';

private_key = '-----BEGIN RSA PRIVATE KEY-----\n' +
'MIICXQIBAAKBgQCZSMKADz3a06UTgEJoUb6tn2iWp3dDkEPJknb6FUXfGLORinWM\n' +
'8BhRi6zNvle6+1NsV4JeAuIFZHNU36B9iIDk4ZWtoWer76DSiByw4JQahiRj1XFM\n' +
'3OXGL/7e3SckKPmryzhxK/3+MVG45M7teUzKFvXXlnIWuhNmNZQf10s5wQIDAQAB\n' +
'AoGAbBNhD+mvMxsGyTklmWgJiWFb3N02uex93yHlwW4+VY6VDYkSWMzwWI6iyG3s\n' +
'bWnG6BzLTn253xN0PeNuxRP5zE/p5KMpB4BYoM47qRzhfFbUj0mldBqLtw7Mmqjv\n' +
'IcxP2WrHgbWbh7fuiUkPwbYBHz6n5DpyU33Shtv4nplosgECQQDGsUNbeWICzEuB\n' +
'L4kHHJbrZ9lwNSsiT3xJlgaM7RmS+ghRv1NABjB/R5ds2LRRfnmAQ97YZ7RRyzLu\n' +
'0SKHhOK3AkEAxX63f0uouIfBq6TfBssNkzJmxWLK2+ru+6nbNTmgmDSdef/2Oc/A\n' +
'd/Gom0e2/wO8u+K1icsxkH4RsG02pvVvRwJBAICEK8NBEgopRjU7H/C/p0aAl34i\n' +
'hdHdg9C8/2OsALy2iScHD7v7xOau0d0PliKYIdK7E6r5+QJm4nziPOlXJKUCQQC4\n' +
'psi0SS4gEjX+4PDxrgosNTSnmr3mrprxTBe7hPzlMlSGi85QsTDYNGcbgArWFk1x\n' +
'Mf/gLM5TtbueRA6UPefjAkBxaZ1Xa1AmFx9l9lGhpE3irgNQTaWF7t6LrboeYfdN\n' +
'H0GK6ksE+qBUu4MkfIoqJBKTJt+2P5pV0d8DRCansRWH\n' +
'-----END RSA PRIVATE KEY-----';

// new object
let key_private = new NodeRSA(private_key);
let key_public = new NodeRSA(public_key);


// public key for encryption
var encryptedString = key_public.encrypt(secret, 'base64');
console.log(encryptedString);

//  private key for decryption
var decryptedString = key_private.decrypt(encryptedString, 'utf8');
console.log(decryptedString);

