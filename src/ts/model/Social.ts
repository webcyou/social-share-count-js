/**
 * Social Model Class
 **/
namespace Model {
  var indexNumber = 0;

  /**
   * Social Model Class
   * Creates a new Social
   * @constructor
   **/
  export class Social {
    constructor(
      public indexNumber: number,
      public name: string,
      public url: string,
      public count: number,
      public node: any
    ) {
    }

    /**
     * Static Function
     **/
    public static fromData(data: any): Social {
      return new Social(
        indexNumber++,
        data.name ? data.name : null,
        null,
        data.count ? data.count : 0,
        data.element ? data.element : null
      );
    }

    public setCount(responseData): void {
      // console.log(responseData);
      console.log(this.name);

      switch(this.name) {
        case 'facebook':
          this.count = responseData.share ? responseData.share.share_count : 0;
          break;
        case 'twitter':
          this.count = responseData.count || 0;
          break;
        case 'feedly':
          console.log(responseData);
          break;
        case 'pinterest':
          this.count = responseData.count || 0;
          break;
        case 'linkedin':
          this.count = responseData.count || 0;
          break;
        case 'hatena':
          this.count = responseData || 0;
          break;
        case 'pocket':
          console.log(responseData);
          this.count = responseData.saves || 0;
          break;
      }
    }
  }
}

export default Model.Social;