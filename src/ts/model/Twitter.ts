/// <reference path='./Social.ts' />
import Social from "./Social";

/**
 * Twitter Model Class
 **/
interface TwitterData {
  url: string;
}

namespace Model {
  export class Twitter extends Social {
    public sendData: TwitterData;

    public static fromData(data: any): Twitter {
      const twitter: Twitter = <Twitter>Social.fromData(data);

      twitter.name = 'twitter';
      twitter.url  = 'https://jsoon.digitiminimi.com/twitter/count.json';
      twitter.sendData = {
        url: data.url
      };

      return twitter;
    }
  }
}

export default Model.Twitter;
