/// <reference path='./_all.ts' />
import Controller from "./social_controller";
import InterfaceOption from "./interface/Option";

'use strict';
var e = eval, global: NodeJS.Global = e('this');

declare namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    socialShareCount: SocialShareCountJS.SocialCounter;
  }
}

/**
 * namespace SocialCounterJS
 **/
namespace SocialShareCountJS {
  /**
   * SocialCounter Main Class
   * @public
   **/
  export class SocialCounter {
    private static _instance: SocialCounter = null;
    private controller: Controller;

    constructor(
      option?: InterfaceOption
    ) {
      if (SocialCounter._instance) {
        return SocialCounter._instance;

      } else {
        this.controller = new Controller(option);

        SocialCounter._instance = this;
      }
    }

    public setOption(option: InterfaceOption) {
      this.controller.setOption(option);
    }
  }
}


if (typeof (module) !== 'undefined') {
  if (typeof (module).exports.socialShareCount === 'undefined') {
    (module).exports.socialShareCount = new SocialShareCountJS.SocialCounter();
  }
}

if (typeof (global) !== 'undefined') {
  if (typeof global.socialShareCount === 'undefined') {
    global.socialShareCount = new SocialShareCountJS.SocialCounter();
  }
}
