const CampaignPage = require('../pageobjects/campaing.page');

describe('Campaign Page - Spec 1', () => {
  it('should load properly', () => {
    CampaignPage.getExpectedUrl('/a-million-more');
    CampaignPage.getExpectedTitle('A million more | Volvo Cars');
  });
});
