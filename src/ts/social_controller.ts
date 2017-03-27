/// <reference path='./_all.ts' />
import InterfaceOption from "./interface/Option";

import Model from "./social_model";
import View from "./social_view";
import SocialService from "./social_service";
const _ = {
  "find": require('lodash.find')
};

/**
 * SocialShareCount Controller Class
 **/
namespace SocialShareCountJS {

  /**
   * Creates a new Controller.
   * @constructor
   **/
  export class Controller {
    private model: Model = new Model();
    private view: View;

    private socialCounters = [];

    constructor(
      option?: InterfaceOption
    ) {
      if(option) {
        this.model.setOption(option);
      }

      this.view = new View((socialCounters) => {
        socialCounters.forEach((socialCounter) => {
          this.socialCounters.push(this.model.createSocialCounter(socialCounter));
        });

        this.requestCountData(this.socialCounters);
      });
    }

    public setOption(option: InterfaceOption): void {
      this.model.setOption(option);
    }

    public requestCountData(socialCounters): void {
      socialCounters.forEach((socialCounter) => {
        new SocialService().sendData(socialCounter)
          .then((responseData) => {
            this.setSocialCount(socialCounter.indexNumber, responseData);
            this.view.setSocialCount(this.socialCounters);
          }).catch((err) => {
            console.error(err);
          });
      });

      console.log(this.socialCounters);
    }
    
    public setSocialCount(indexNumber: number, responseData): void {
      _.find(this.socialCounters, (social) => {
        if(social.indexNumber === indexNumber) {
          social.setCount(responseData);
        }
      });
    }
  }
}

export default SocialShareCountJS.Controller;
