const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Spec 4', () => {
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
});
