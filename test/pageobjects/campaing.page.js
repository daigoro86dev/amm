const Page = require('./page');

/**
 * @description A Million More Campaign page class
 */
class CampaignPage extends Page {
  /**
   * @description Getter functions for UI mapping of campaign page specific elements
   */
  get autoPlayVideo() {
    return browser.$('[data-autoid="Video-1"] video');
  }
  get campaignTextStatement() {
    return browser.$('[data-autoid="TextStatement-1"]');
  }
  get videoTestimonials() {
    return browser.$('[data-autoid="VideoTestimonials-1"]');
  }
  get decadesOfInovationTitle() {
    return browser.$('[data-autoid="imageWithText:title"]');
  }
  get topVideoContainer() {
    return browser.$('[data-autoid="Video-1"]');
  }
  get watchTheStoryBtn() {
    return $('button=watch the story');
  }
  get learnMoreAboutCarSafetyAnchor() {
    return $('[data-autoid="iconCallouts:cta"]');
  }
  get learnMoreAboutInovationAnchor() {
    return $('[data-autoid="imageWithText:primaryCta"]');
  }
  get testimonialVideoPlayButton() {
    return $$('[data-autoid="videoTestimonials:container"] svg');
  }
  /**
   * @override
   */
  open() {
    super.open('a-million-more');
  }
  /**
   * @description Starts playback of campaign overall story video
   */
  watchTheStory() {
    this.watchTheStoryBtn.waitForDisplayed();
    this.watchTheStoryBtn.click();
  }
  /**
   * @description go to car safety page
   */
  learnMoreAboutCarSafety() {
    this.learnMoreAboutCarSafetyAnchor.click();
  }
  /**
   * @description go to safety heritage page
   */
  learnMoreAboutInovation() {
    this.learnMoreAboutInovationAnchor.click();
  }
  /**
   * @description get testimonial video based on video index
   * @param {Number} index the video index
   */
  getTestimonialVideoByIndex(index) {
    return $(`video[data-autoid="videoTestimonials:video-${index}"]`);
  }
}

module.exports = new CampaignPage();
