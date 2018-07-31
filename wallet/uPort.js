/*
const uportConnect = require('uport-connect');
const qrcode = require('qrcode-terminal');

const mnidAddress = '2oqwHbLQ8Ao28LvFFThbd1Jxpj45EBPb8jd';
const signingKey = require('./uPortKey');
const appName = 'Dentacoin Wallet';

const uriHandler = (uri) => {
  qrcode.generate(uri, {small: true})
  console.log(uri)
}

const uport = new uportConnect.Connect(appName, {
    uriHandler,
    clientId: mnidAddress,
    network: 'rinkeby',
    signer: uportConnect.SimpleSigner(signingKey.key)
});

const web3 = uport.getWeb3();
console.log(web3.eth.getCoinbase());


// Request credentials
uport.requestCredentials({
  requested: ['name'],
}).then((credentials) => {
  console.log(credentials);
})
*/

import { Connect, SimpleSigner } from 'uport-connect';

    const uport = new Connect('Dentacoin Wallet', {
      clientId: '2oqwHbLQ8Ao28LvFFThbd1Jxpj45EBPb8jd',
      network: 'rinkeby',
      signer: SimpleSigner('33e090f34dbd2fc20e87408f90c078d1018bd77fb8806bb0b69da945fb4eaefc'),
    })

    // Request credentials to login
    uport.requestCredentials({
      requested: ['name', 'phone', 'country'],
      notifications: true // We want this if we want to recieve credentials
    })
    .then((credentials) => {
      // Do something
    })

    // Attest specific credentials
    uport.attestCredentials({
      sub: THE_RECEIVING_UPORT_ADDRESS,
      claim: {
        CREDENTIAL_NAME: CREDENTIAL_VALUE
      },
      exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
    })
