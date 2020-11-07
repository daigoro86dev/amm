const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Spec 5', () => {
  it('should display each testimonial video play button', () => {
    CampaignPage.shouldHaveAmountOfElements(
      CampaignPage.testimonialVideoPlayButton,
      4
    );
  });
});
