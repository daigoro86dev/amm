const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Testimonial Videos', () => {
  beforeEach(() => {
    CampaignPage.open();
  });
  it('should play the campaign story video and remove the auto play video', () => {
    CampaignPage.acceptCookies();
    CampaignPage.watchTheStory();
    CampaignPage.shouldNotHaveElement(CampaignPage.autoPlayVideo);
  });
  it('should display each testimonial video play button', () => {
    CampaignPage.shouldHaveAmountOfElements(
      CampaignPage.testimonialVideoPlayButton,
      4
    );
  });
  it('should stop testimonial video if user scrolls out of view', () => {
    CampaignPage.getTestimonialVideoByIndex(0).click();
    const currentTime = CampaignPage.getTestimonialVideoByIndex(0).getProperty(
      'currentTime'
    );
    CampaignPage.watchTheStoryBtn.scrollIntoView();
    expect(
      CampaignPage.getTestimonialVideoByIndex(0).getProperty('currentTime')
    ).toBeLessThanOrEqual(currentTime + 0.5);
  });
  it('should play each of the testimonial videos', () => {
    [...Array(4).keys()].forEach((indexValue) => {
      CampaignPage.getTestimonialVideoByIndex(indexValue).click();
      expect(CampaignPage.getTestimonialVideoByIndex(indexValue)).toHaveAttr(
        'controls'
      );
    });
  });
});
