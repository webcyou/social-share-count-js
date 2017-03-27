/// <reference path='./Social.ts' />
import Social from "./Social";

/**
 * Linkedin Model Class
 **/
interface LinkedinData {
  url: string;
}

namespace Model {
  export class Linkedin extends Social {
    public sendData: LinkedinData;

    public static fromData(data: any): Linkedin {
      const linkedin: Linkedin = <Linkedin>Social.fromData(data);

      linkedin.name = 'linkedin';
      linkedin.url  = 'http://www.linkedin.com/countserv/count/share';
      linkedin.sendData = {
        url: data.url
      };

      return linkedin;
    }
  }
}

export default Model.Linkedin;