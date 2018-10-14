# Sheetbase Module: @sheetbase/jsrsasign-server

Jsrsasign for Google apps script.

<!-- <block:header> -->

[![License][license_badge]][license_url] [![clasp][clasp_badge]][clasp_url] [![Support me on Patreon][patreon_badge]][patreon_url] [![PayPal][paypal_donate_badge]][paypal_donate_url] [![Ask me anything][ask_me_badge]][ask_me_url]

<!-- </block:header> -->

## Install

- Using npm: `npm install --save @sheetbase/jsrsasign-server`

- As a library: `1vWIxUEbidGO8Jl3tMoofvecwBdQmqMdHpa-zFeR653aFt1VQMbzKzaMV`

  Set the _Indentifier_ to **Jsrsasign** and select the lastest version, [view code](https://script.google.com/d/1vWIxUEbidGO8Jl3tMoofvecwBdQmqMdHpa-zFeR653aFt1VQMbzKzaMV/edit?usp=sharing).

## Examples

```ts
function example1(): void {
  const base64: string = Jsrsasign.utf8tob64("hello");
  Logger.log(base64);
}

function example2(): void {
  const md5: string = Jsrsasign.KJUR.crypto.Util.md5("hello");
  Logger.log(md5);
}

function example3(): void {
  // sign HS256 signature with password "aaa" implicitly handled as string
  const sJWS = Jsrsasign.KJUR.jws.JWS.sign(
    null,
    { alg: "HS256", cty: "JWT" },
    { age: 21 },
    "aaa"
  );
  Logger.log(sJWS);
}
```

## Documentation

Homepage: http://kjur.github.io/jsrsasign/

## License

**@sheetbase/jsrsasign-server** is released under the [MIT](https://github.com/sheetbase/module-jsrsasign-server/blob/master/LICENSE) license.

<!-- <block:footer> -->

[license_badge]: https://img.shields.io/github/license/mashape/apistatus.svg
[license_url]: https://github.com/sheetbase/module-jsrsasign-server/blob/master/LICENSE
[clasp_badge]: https://img.shields.io/badge/built%20with-clasp-4285f4.svg
[clasp_url]: https://github.com/google/clasp
[patreon_badge]: https://ionicabizau.github.io/badges/patreon.svg
[patreon_url]: https://www.patreon.com/lamnhan
[paypal_donate_badge]: https://ionicabizau.github.io/badges/paypal_donate.svg
[paypal_donate_url]: https://www.paypal.me/lamnhan
[ask_me_badge]: https://img.shields.io/badge/ask/me-anything-1abc9c.svg
[ask_me_url]: https://m.me/sheetbase

<!-- </block:footer> -->
