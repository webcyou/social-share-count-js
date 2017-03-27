/// <reference path='./Social.ts' />
import Social from "./Social";

/**
 * Facebook Model Class
 * Service URL: https://www.facebook.com/
 **/
interface FacebookData {
  id: string;
}

namespace Model {
  export class Facebook extends Social {
    public sendData: FacebookData;

    public static fromData(data: any): Facebook {
      const facebook: Facebook = <Facebook>Social.fromData(data);

      facebook.name = 'facebook';
      facebook.url  = 'https://graph.facebook.com/';
      facebook.sendData = {
        id: data.url
      };

      return facebook;
    }
  }
}

export default Model.Facebook;
