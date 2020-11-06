const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Spec 8', () => {
  it('should do visual regression testing of the campaign page', () => {
    CampaignPage.learnMoreAboutCarSafetyAnchor.scrollIntoView();
    expect(CampaignPage.autoPlayVideo).not.toBeVisibleInViewport();
    browser.saveScreen('CampaignPageSafetyFeatures');
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
    expect(browser.checkScreen('CampaignPage')).toEqual(0);
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
