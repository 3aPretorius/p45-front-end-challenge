function init() {
  console.log('user-profile-page.init()');
}

export default {
  init: init
}

function initialise() {
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

initialise();
