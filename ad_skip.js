let ad_parent_node = document.querySelector(".video-ads.ytp-ad-module");

let callback = (mutationList, observer) => {
  let ad_overlay_close_continer = document.querySelector(".ytp-ad-overlay-close-container");
  if (ad_overlay_close_continer) {
    ad_overlay_close_continer.click();
  }
  let ad_overlay_skip_button = document.querySelector(".ytp-ad-skip-button-container");
  if (ad_overlay_skip_button){
    ad_overlay_skip_button.click();
};

let config = {
  attributes: true,
  childList: true,
  subtree: true
};

let observer = new MutationObserver(callback);
observer.observe(ad_parent_node, config);
