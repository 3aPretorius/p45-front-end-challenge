function init() {
  document.body.classList.add('has-js');
  var arrowButton = document.querySelector('.user-profile-page__header__arrow-button');
  arrowButton.addEventListener('click', onFooterToggleButtonClick);
}

function onFooterToggleButtonClick() {
  if (document.body.classList.contains('should-show-footer') === true) {
    document.body.classList.remove('should-show-footer');
  } else {
    document.body.classList.add('should-show-footer');
  }
}

export default {
  init: init
}
