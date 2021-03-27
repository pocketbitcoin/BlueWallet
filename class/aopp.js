import url from 'url';

export default class Aopp {
  /**
   * Implements signing of a message according to "Address Ownership Proof Protocol"
   *
   * see https://gitlab.com/aopp/address-ownership-proof-protocol
   * 
   */

  static isCallbackUri(uri) {
    return uri.startsWith('​aopp:');
  }

  static postSignedMessage(uri) {
    // implement 
  }

  static getParamsFromUrl(uri) {
    const urlObject = url.parse(uri, true); // eslint-disable-line node/no-deprecated-api
    return {
      v: urlObject.query.v,
      msg: urlObject.query.msg,
      asset: urlObject.query.asset,
      format: urlObject.query.format,
      callback: urlObject.query.callback,
    };
  }
}
