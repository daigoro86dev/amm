const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Spec 2', () => {
  it('should link to car safety page', () => {
    CampaignPage.learnMoreAboutCarSafety();
    CampaignPage.getExpectedTitle('Car safety | Volvo Cars');
    CampaignPage.getExpectedUrl('/car-safety');
  });
});
