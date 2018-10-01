/**
 * 
 * Name: @sheetbase/jsrsasign-server
 * Description: Jsrsasign for Google apps script.
 * Version: 8.0.12
 * Author: Sheetbase
 * Homepage: https://sheetbase.net
 * License: MIT
 * Repo: https://github.com/sheetbase/module-jsrsasign-server.git
 *
 */
 
declare const jsrsasignModuleExports: {(): any};
const jsrsasign = jsrsasignModuleExports();
const Jsrsasign = jsrsasign;

for (const key of Object.keys(jsrsasign)) {
	this[key] = jsrsasign[key];
}

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
