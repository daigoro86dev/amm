const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Spec 3', () => {
  it('should play the campaign story video and remove the auto play video', () => {
    CampaignPage.watchTheStory();
    CampaignPage.shouldNotHaveElement(CampaignPage.autoPlayVideo);
  });
});
