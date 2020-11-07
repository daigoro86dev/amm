const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Visual Regression', () => {
  it('should save some screenshots', () => {
    // Snapshot UI Elements
    browser.saveElement(CampaignPage.watchTheStoryBtn, 'watchTheStoryBtn');
    browser.saveElement(
      CampaignPage.learnMoreAboutCarSafetyAnchor,
      'learnMoreAboutCarSafetyAnchor'
    );
    browser.saveElement(
      CampaignPage.learnMoreAboutInovationAnchor,
      'learnMoreAboutInovationAnchor'
    );
    // UI Elements
    expect(
      browser.checkElement(CampaignPage.watchTheStoryBtn, 'watchTheStoryBtn')
    ).toEqual(0);
    expect(
      browser.checkElement(
        CampaignPage.learnMoreAboutCarSafetyAnchor,
        'learnMoreAboutCarSafetyAnchor'
      )
    ).toEqual(0);
    expect(
      browser.checkElement(
        CampaignPage.learnMoreAboutInovationAnchor,
        'learnMoreAboutInovationAnchor'
      )
    ).toEqual(0);
  });
});
