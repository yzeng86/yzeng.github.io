
'use strict';
(function() {


  /**
   * This function initializes game by setting up clickable buttons.
   */
  function init() {
    let startButton = id('start-btn');
    let backButton = id('back-btn');
    let refreButton = id('refresh-btn');
    startButton.addEventListener('click', startButtonClicked);
    backButton.addEventListener('click', backButtonClicked);
    refreButton.addEventListener('click', putCards);
  }

  /**
   * Getting a element with certain tagname
   * @param {HTMLElement} tagName, a tag from HTML file
   * @returns {HTMLElement} the element with this tagname
   */
  function qs(tagName) {
    return document.querySelector(tagName);
  }

  /**
   * Getting an element by id
   * @param {string} id Input id
   * @return {HTMLElement} the element of certain id
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Getting elements with certain tagname
   * @param {HTMLElement} tagName, a tag from HTML file
   * @returns {HTMLElement} an element array with this tagname
   */
  function qsa(tagName) {
    return document.querySelectorAll(tagName);
  }

  /**
   * create a new node
   * @param {HTMLElement} tagName the new tag
   * @return {HTMLElement}a new node
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
