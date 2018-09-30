declare const jsrsasignExports: {(): any};
const jsrsasign = jsrsasignExports();
const Jsrsasign = jsrsasign;

export { jsrsasign, Jsrsasign };

export function sheetbase_jsrsasign_example1(): void {
  const base64: string = Jsrsasign.utf8tob64('hello');
  Logger.log(base64);
}

export function sheetbase_jsrsasign_example2(): void {
  const md5: string = Jsrsasign.KJUR.crypto.Util.md5('hello');
  Logger.log(md5);
}

export function sheetbase_jsrsasign_example3(): void {
  // sign HS256 signature with password "aaa" implicitly handled as string
  const sJWS = Jsrsasign.KJUR.jws.JWS.sign(null, {alg: 'HS256', cty: 'JWT'}, {age: 21}, 'aaa');
  Logger.log(sJWS);
}
