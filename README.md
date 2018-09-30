# Sheetbase Module: jsrsasign-server

Using jsrsasign in Google Apps Script. See: https://github.com/kjur/jsrsasign

## Install

- NPM: ``$ npm install --save @sheetbase/jsrsasign-server``

- As library: ``1vWIxUEbidGO8Jl3tMoofvecwBdQmqMdHpa-zFeR653aFt1VQMbzKzaMV`` (set Indentifier to **Jsrsasign**, [view code](https://script.google.com/d/1vWIxUEbidGO8Jl3tMoofvecwBdQmqMdHpa-zFeR653aFt1VQMbzKzaMV/edit?usp=sharing))

## Usage

```ts
// base64
const base64: string = Jsrsasign.utf8tob64('hello');
Logger.log(base64);

// md5
const md5: string = Jsrsasign.KJUR.crypto.Util.md5('hello');
Logger.log(md5);

// JWT
const sJWS = Jsrsasign.KJUR.jws.JWS.sign(null, {alg: 'HS256', cty: 'JWT'}, {age: 21}, 'aaa');
Logger.log(sJWS);
```

## License

[MIT][license-url]

[license-url]: https://github.com/sheetbase/module-jsrsasign-server/blob/master/LICENSE