const CampaignPage = require('../pageobjects/campaing.page');

describe('A Million More Campain Page', () => {
  it('should load properly', () => {
    CampaignPage.open();
    CampaignPage.acceptCookies();
    CampaignPage.getExpectedTitle('A million more | Volvo Cars');
  });
  it('should play the campaign story video and remove the auto play video', () => {
    CampaignPage.watchTheStory();
    CampaignPage.shouldNotHaveElement(CampaignPage.autoPlayVideo);
  });
  it('should link to car safety page', () => {
    CampaignPage.learnMoreAboutCarSafety();
    CampaignPage.getExpectedTitle('Car safety | Volvo Cars');
    CampaignPage.getExpectedUrl('/car-safety');
  });
  it('should play each of the testimonial videos', () => {
    CampaignPage.open();
    [...Array(4).keys()].forEach((indexValue) => {
      CampaignPage.getTestimonialVideoByIndex(indexValue).click();
      expect(CampaignPage.getTestimonialVideoByIndex(indexValue)).toHaveAttr(
        'controls'
      );
    });
  });
  it('should link to safety heritage page', () => {
    CampaignPage.open();
    CampaignPage.learnMoreAboutInovation();
    CampaignPage.getExpectedTitle('Safety innovations | Volvo Cars');
    CampaignPage.getExpectedUrl('/safety-heritage');
  });
});
