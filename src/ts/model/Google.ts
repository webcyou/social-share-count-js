/// <reference path='./Social.ts' />
import Social from "./Social";

/**
 * Google+ Model Class
 * Service URL: https://plus.google.com/?hl=ja
 **/
namespace Model {
  export class Google extends Social {
    public sendData: any;

    public static fromData(data: any, key?: string): Google {
      const google: Google = <Google>Social.fromData(data);

      google.name = 'google';

      if(key) {
        google.url = `https://clients6.google.com/rpc?key=${key}`;
        google.sendData = [{
          "method": "pos.plusones.get",
          "id": "p",
          "params": {
            "nolog": true,
            "id": data.url,
            "source": "widget",
            "userId": "@viewer",
            "groupId": "@self"
          },
          "jsonrpc": "2.0",
          "key": "p",
          "apiVersion": "v1"
        }];
      } else {
        google.url = "https://count.donreach.com/";
        google.sendData = {
          url: data.url
        }
      }

      return google;
    }
  }
}

export default Model.Google;
