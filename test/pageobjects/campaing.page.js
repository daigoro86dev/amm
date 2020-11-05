const Page = require('./page');

/**
 * @description A Million More Campaign page class
 */
class CampaignPage extends Page {
  /**
   * Getter functions for page elements
   */
  get autoPlayVideo() {
    return browser.$('[data-autoid="Video-1"] video');
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
