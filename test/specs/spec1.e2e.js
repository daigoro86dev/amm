const CampaignPage = require('../pageobjects/campaing.page');

describe('Campaign Page - Spec 1', () => {
  it('should have link to car safety page', () => {
    expect(CampaignPage.learnMoreAboutCarSafetyAnchor).toBeVisible();
    expect(CampaignPage.learnMoreAboutCarSafetyAnchor).toHaveHrefContaining(
      '/car-safety'
    );
    expect(
      CampaignPage.learnMoreAboutCarSafetyAnchor
    ).toHaveTextContaining('Learn more about car safety', { ignoreCase: true });
  });
});
