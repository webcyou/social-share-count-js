/// <reference path='./_all.ts' />

/**
 * SocialShareCount View Class
 **/
namespace SocialShareCountJS {
  const socialCountSelectors: string[] = [
    '[data-sc-fb]', '[data-sc-tw]', '[data-sc-gp]', '[data-sc-fd]',
    '[data-sc-pr]', '[data-sc-ln]', '[data-sc-hb]', '[data-sc-pk]'
  ];

  /**
   * Creates a new SocialCounterView.
   * @constructor
   **/
  export class SocialCounterView {
    private socialCounterElements = [];

    /**
     * SocialShareCount View Class
     * @param {requestCallback} callBack - The callback that handles the response.
     **/
    constructor(
      callBack?
    ) {
      document.addEventListener("DOMContentLoaded", () => {
        this.bindSocialCounterElements();

        callBack(this.socialCounterElements);
      });
    }

    public bindSocialCounterElements(): void {
      let socialViewList = [];

      socialCountSelectors.forEach((socialCountSelector: string) => {
        socialViewList.push(
          this.createSocialCounterElements(socialCountSelector, document.querySelectorAll(socialCountSelector))
        );
      });

      socialViewList.forEach((socialView: NodeList[]) => {
        socialView.forEach((social) => {
          this.socialCounterElements.push(social);
        });
      });
    }

    public createSocialCounterElements(selector: string, elements) {
      let socialViewList = [];

      switch(selector) {
        case '[data-sc-fb]':
          elements.forEach((element) => {
            socialViewList.push(this.createSocialView('facebook', element, element.dataset.scFb));
          });
          break;
        case '[data-sc-tw]':
          elements.forEach((element) => {
            socialViewList.push(this.createSocialView('twitter', element, element.dataset.scTw));
          });
          break;
        case '[data-sc-gp]':
          elements.forEach((element) => {
            socialViewList.push(this.createSocialView('google', element, element.dataset.scGp));
          });
          break;
        case '[data-sc-fd]':
          elements.forEach((element) => {
            socialViewList.push(this.createSocialView('feedly', element, element.dataset.scFd));
          });
          break;
        case '[data-sc-pr]':
          elements.forEach((element) => {
            socialViewList.push(this.createSocialView('pinterest', element, element.dataset.scPr));
          });
          break;
        case '[data-sc-ln]':
          elements.forEach((element) => {
            socialViewList.push(this.createSocialView('linkedin', element, element.dataset.scLn));
          });
          break;
        case '[data-sc-hb]':
          elements.forEach((element) => {
            socialViewList.push(this.createSocialView('hatena', element, element.dataset.scHb));
          });
          break;
        case '[data-sc-pk]':
          elements.forEach((element) => {
            socialViewList.push(this.createSocialView('pocket', element, element.dataset.scPk));
          });
          break;
      }

      return socialViewList;
    }

    private createSocialView(name: string, element, url: string): Social {
      return Social.fromData({
        name: name,
        element: element,
        url: url
      });
    }

    public setSocialCount(socialCounters) {
      socialCounters.forEach((social) => {
        social.node.innerText = social.count;
      });
    }
  }

  /**
   * Social View Class
   * Creates a new Social
   * @constructor
   **/
  class Social {
    constructor(
      public name: string,
      public element: any,
      public url: string
    ) {
    }

    public static fromData(data: any): Social {
      return new Social(
        data.name,
        data.element ? data.element : null,
        data.url
      );
    }
  }
}

export default SocialShareCountJS.SocialCounterView;
