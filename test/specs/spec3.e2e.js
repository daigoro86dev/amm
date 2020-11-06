const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Spec 3', () => {
  it('should link to safety heritage page', () => {
    CampaignPage.learnMoreAboutInovation();
    CampaignPage.getExpectedTitle('Safety innovations | Volvo Cars');
    CampaignPage.getExpectedUrl('/safety-heritage');
  });
});
