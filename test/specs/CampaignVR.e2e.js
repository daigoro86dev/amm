const CampaignPage = require('../pageobjects/campaing.page');

describe('Campain Page - Visual Regression', () => {
  it('should save some screenshots', () => {
    // Page section screens
    CampaignPage.videoTestimonials.scrollIntoView();
    expect(CampaignPage.videoTestimonials).toBeVisible();
    browser.saveScreen('videoTestimonialsScreen');
    CampaignPage.decadesOfInovationTitle.scrollIntoView();
    expect(CampaignPage.decadesOfInovationTitle).toBeVisible();
    browser.saveScreen('decadesOfInovationScreen');
    // Snapshot UI Elements
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
  it('should do visual regression with the baseline screenshots', () => {
    // Page section screens
    expect(browser.checkScreen('videoTestimonialsScreen')).toEqual(0);
    expect(browser.checkScreen('decadesOfInovationScreen')).toEqual(0);
    // UI Elements
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
