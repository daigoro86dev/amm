const CampaignPage = require('../pageobjects/campaing.page');

describe('Campaign Page - Spec 2', () => {
  it('should have link to safety heritage page', () => {
    expect(CampaignPage.learnMoreAboutInovationAnchor).toBeVisible();
    expect(CampaignPage.learnMoreAboutInovationAnchor).toHaveHrefContaining(
      '/safety-heritage'
    );
    expect(
      CampaignPage.learnMoreAboutInovationAnchor
    ).toHaveTextContaining('Learn more', { ignoreCase: true });
  });
});
