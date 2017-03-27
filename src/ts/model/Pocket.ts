/// <reference path='./Social.ts' />
import Social from "./Social";

/**
 * Pocket Model Class
 * Service URL: https://getpocket.com/
 **/
interface PocketData {
  q: string;
  format: string;
  env: string;
}

namespace Model {
  export class Pocket extends Social {
    public sendData: PocketData;

    public static fromData(data: any): Pocket {
      const pocket: Pocket = <Pocket>Social.fromData(data);

      pocket.name = 'pocket';
      pocket.url  = 'https://query.yahooapis.com/v1/public/yql';
      pocket.sendData = {
        q: `SELECT content FROM data.headers WHERE url=
            'https://widgets.getpocket.com/v1/button?label=pocket&count=vertical&v=1&url=${data.url}&src=${data.url}'`,
        format: 'xml',
        env: 'store://datatables.org/alltableswithkeys'
      };

      return pocket;
    }
  }
}

export default Model.Pocket;