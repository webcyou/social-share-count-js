/// <reference path='./Social.ts' />
import Social from "./Social";

/**
 * Hatena Model Class
 **/
interface HatenaData {
  url: string;
}

namespace Model {
  export class Hatena extends Social {
    public sendData: HatenaData;

    public static fromData(data: any): Hatena {
      const hatena: Hatena = <Hatena>Social.fromData(data);

      hatena.name = 'hatena';
      hatena.url  = '//api.b.st-hatena.com/entry.count';
      hatena.sendData = {
        url: data.url
      };

      return hatena;
    }
  }
}

export default Model.Hatena;
