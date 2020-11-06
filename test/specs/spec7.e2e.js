const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Spec 7', () => {
  it('should play each of the testimonial videos', () => {
    [...Array(4).keys()].forEach((indexValue) => {
      CampaignPage.getTestimonialVideoByIndex(indexValue).click();
      expect(CampaignPage.getTestimonialVideoByIndex(indexValue)).toHaveAttr(
        'controls'
      );
      expect(
        CampaignPage.getTestimonialVideoByIndex(indexValue).getProperty(
          'currentTime'
        )
      ).toBeGreaterThan(0);
    });
  });
});
