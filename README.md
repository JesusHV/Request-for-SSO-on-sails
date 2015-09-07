# Request

## 

### OAuth2.0 Refresh Token

- http://oauth.googlecode.com/svn/spec/ext/session/1.0/drafts/1/spec.html#anchor4
- https://developer.yahoo.com/oauth/guide/oauth-refreshaccesstoken.html

###Example usage RefreshTokenOA2
###Este servicio hace un request para refrescar tokens hacia la url indicada en el parámetro uri.

```js

var opts = {
  form: {
    grant_type: 'refresh_token',
    client_id: '...',
    client_secret: '...',
    refresh_token: '...'
  },
  json: true
},
uri = 'http://service-oauth.com/refreshtoken';

sso.RefreshTokenOA2(uri, opts, function (err, resutl, info){
  //
})
```
### Request sample

- https://github.com/request/request

###Example usage getTokenURL
###Este servicio hace un request con parámetros indicados como ejemplo

```js
var opts = {
    method: 'PUT',
    preambleCRLF: true,
    postambleCRLF: true,
    uri: 'http://service.com/upload',
    headers: {
      'User-Agent': 'request'
    },
    agentOptions: {
        //Cretificados
        cert: fs.readFileSync(certFile),
        key: fs.readFileSync(keyFile),

        passphrase: 'password',
        securityOptions: 'SSL_OP_NO_SSLv3'
    },
    multipart: [
      {
        'content-type': 'application/json',
        body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
      },
      { body: 'I am an attachment' },
      { body: fs.createReadStream('image.png') }
    ],
    // alternatively pass an object containing additional options
    multipart: {
      chunked: false,
      data: [
        {
          'content-type': 'application/json',
          body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
        },
        { body: 'I am an attachment' }
      ]
    }
  }

sso.getTokenURL(opts, function (err, resutl, info){
  //
})
```