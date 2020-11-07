const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Visual Regression', () => {
  it('should save some screenshots', () => {
    CampaignPage.learnMoreAboutCarSafetyAnchor.scrollIntoView();
    browser.saveElement(CampaignPage.autoPlayVideo, 'autoPlayVideo');
    browser.saveElement(CampaignPage.watchTheStoryBtn, 'watchTheStoryBtn');
    browser.saveElement(
      CampaignPage.learnMoreAboutCarSafetyAnchor,
      'learnMoreAboutCarSafetyAnchor'
    );
    browser.saveElement(
      CampaignPage.learnMoreAboutInovationAnchor,
      'learnMoreAboutCarSafetyAnchor'
    );
  });
  it('should do visual regression with the baseline', () => {
    expect(
      browser.checkElement(CampaignPage.autoPlayVideo, 'autoPlayVideo')
    ).toEqual(0);
    expect(
      browser.checkElement(CampaignPage.watchTheStoryBtn, 'watchTheStoryBtn')
    ).toEqual(0);
    expect(
      browser.checkElement(
        CampaignPage.learnMoreAboutCarSafetyAnchor,
        'learnMoreAboutCarSafetyAnchor'
      )
    ).toEqual(0);
  });
});
