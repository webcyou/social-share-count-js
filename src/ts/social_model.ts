/// <reference path='./_all.ts' />
import Social    from "./model/Social";
import Facebook  from "./model/Facebook";
import Twitter   from "./model/Twitter";
import Feedly    from "./model/Feedly";
import Pinterest from "./model/Pinterest";
import Linkedin  from "./model/Linkedin";
import Hatena    from "./model/Hatena";
import Pocket    from "./model/Pocket";

/**
 * SocialShareCount Model Class
 * @public
 **/
namespace SocialShareCountJS {
  export class SocialCounterModel {
    public option;

    public createSocialCounter(social): Social {
      let socialModel;

      switch(social.name) {
        case 'facebook':
          socialModel = Facebook.fromData(social);
          break;
        case 'twitter':
          socialModel = Twitter.fromData(social);
          break;
        case 'feedly':
          socialModel = Feedly.fromData(social);
          break;
        case 'pinterest':
          socialModel = Pinterest.fromData(social);
          break;
        case 'linkedin':
          socialModel = Linkedin.fromData(social);
          break;
        case 'hatena':
          socialModel = Hatena.fromData(social);
          break;
        case 'pocket':
          socialModel = Pocket.fromData(social);
          break;
      }

      return socialModel;
    }

    public setOption(option) {
      this.option = option;
    }
  }
}

export default SocialShareCountJS.SocialCounterModel;
