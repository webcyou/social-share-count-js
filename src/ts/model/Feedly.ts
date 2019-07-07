/// <reference path='./Social.ts' />
import Social from "./Social";

/**
 * Feedly Model Class
 **/
namespace Model {
  export class Feedly extends Social {
    public sendData: object;

    public static fromData(data: any): Feedly {
      const feedly: Feedly = <Feedly>Social.fromData(data);

      feedly.name = 'feedly';
      feedly.url  = `//cloud.feedly.com/v3/feeds/feed%2F${encodeURIComponent(data.url)}`;
      feedly.sendData = null;

      return feedly;
    }
  }
}

export default Model.Feedly;
