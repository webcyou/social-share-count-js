/// <reference path='./_all.ts' />
import request = require('superagent');
import jsonp   = require('superagent-jsonp');
const Promise  = this.Promise || require('es6-promise').Promise;

/**
 * Social Service Class
 * Creates a new SocialService.
 * @constructor
 **/
export default class SocialService {
  public sendData(social) {
    return new Promise((resolve, reject) => {
      request.get(social.url)
        .query(social.sendData)
        .use(jsonp({
          timeout: 10000
        }))
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
      });
    });
  }

  private isGoogleKey(sendData): boolean {
    return Array.isArray(sendData);
  }
}
