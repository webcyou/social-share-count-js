/// <reference path='./Social.ts' />
import Social from "./Social";

/**
 * Pocket Model Class
 * Service URL: https://getpocket.com/
 **/
interface PocketData {
  url: string;
}

namespace Model {
  export class Pocket extends Social {
    public sendData: PocketData;

    public static fromData(data: any): Pocket {
      const pocket: Pocket = <Pocket>Social.fromData(data);

      pocket.name = 'pocket';
      pocket.url  = 'https://widgets.getpocket.com/api/saves';
      pocket.sendData = {
        url: data.url
      };

      return pocket;
    }
  }
}

export default Model.Pocket;