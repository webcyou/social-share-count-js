/// <reference path='./Social.ts' />
import Social from "./Social";

/**
 * Pinterest Model Class
 **/
interface PinterestData {
  url: string;
}

namespace Model {
  export class Pinterest extends Social {
    public sendData: PinterestData;

    public static fromData(data: any): Pinterest {
      const pinterest: Pinterest = <Pinterest>Social.fromData(data);

      pinterest.name = 'pinterest';
      pinterest.url  = '//api.pinterest.com/v1/urls/count.json';
      pinterest.sendData = {
        url: data.url
      };

      return pinterest;
    }
  }
}

export default Model.Pinterest;
