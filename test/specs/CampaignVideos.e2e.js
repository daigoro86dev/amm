const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Videos', () => {
  it('should play the campaign story video and remove the auto play video', () => {
    CampaignPage.watchTheStory();
    CampaignPage.shouldNotHaveElement(CampaignPage.autoPlayVideo);
  });
  it('should stop testimonial video if user scrolls out of view', () => {
    CampaignPage.getTestimonialVideoByIndex(0).click();
    const currentTime = CampaignPage.getTestimonialVideoByIndex(0).getProperty(
      'currentTime'
    );
    CampaignPage.topVideoContainer.scrollIntoView();
    expect(CampaignPage.topVideoContainer).toBeVisible();
    expect(
      CampaignPage.getTestimonialVideoByIndex(0).getProperty('currentTime')
    ).toBeLessThanOrEqual(currentTime + 2.0);
  });
  it('should display each testimonial video play button', () => {
    CampaignPage.reload();
    CampaignPage.shouldHaveAmountOfElements(
      CampaignPage.testimonialVideoPlayButton,
      4
    );
  });
  it('should play each of the testimonial videos', () => {
    CampaignPage.reload();
    [...Array(4).keys()].forEach((indexValue) => {
      CampaignPage.getTestimonialVideoByIndex(indexValue).click();
      browser.pause(2000);
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
