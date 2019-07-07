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
          if (responseData.results) {
            let content = responseData.results.toString();
            let match   = content.match(/&lt;em id="cnt"&gt;(\d+)&lt;\/em&gt;/i);

            this.count = match !== null ? Number(match[1]) : 0;
          }
          break;
      }
    }
  }
}

export default Model.Social;