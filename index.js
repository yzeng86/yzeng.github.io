
'use strict';
(function() {

  window.addEventListener('load', init);
  /**
   * This function initializes game by setting up clickable buttons.
   */
  function init() {
    makeArrowsClick();
  }

  function makeArrowsClick() {
    // Tip
    makeArrowClick("tip");
    makeArrowClick('improve');
    makeArrowClick('accepts');


  }

  function makeArrowClick(curSkill) {
    const curArrow = id(curSkill+ "_arrow");
    const curContent = id(curSkill + "_content");
    curArrow.addEventListener('click',() => {
      toggleArrow(curArrow);
      curContent.classList.toggle('arrow_clicked');
    })
  }


  function toggleArrow(curArrow){
    // Toggle Functionality of Arrow
    let curAtt = curArrow.getAttribute("points");
    const points1 = "0,0 10,0 5,8.66";
    const points2 = "0,0 0,10 8.66,5"
    if(curAtt == points1) {
      curArrow.setAttribute('points', points2);
    } else {
      curArrow.setAttribute('points', points1);
    }
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
