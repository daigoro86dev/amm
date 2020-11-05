const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Load & Links', () => {
  beforeEach(() => {
    CampaignPage.open();
  });
  it('should load properly', () => {
    CampaignPage.acceptCookies();
    CampaignPage.getExpectedUrl('/a-million-more');
    CampaignPage.getExpectedTitle('A million more | Volvo Cars');
  });
  it('should link to car safety page', () => {
    CampaignPage.learnMoreAboutCarSafety();
    CampaignPage.getExpectedTitle('Car safety | Volvo Cars');
    CampaignPage.getExpectedUrl('/car-safety');
  });
  it('should link to safety heritage page', () => {
    CampaignPage.learnMoreAboutInovation();
    CampaignPage.getExpectedTitle('Safety innovations | Volvo Cars');
    CampaignPage.getExpectedUrl('/safety-heritage');
  });
});
