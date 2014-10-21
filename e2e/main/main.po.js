/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

 'use strict';

 var MainPage = function() {
 	this.upperxInput = element(by.css('#upperxinput'));
 	this.upperyInput = element(by.css('#upperyinput'));
 	this.robotSubmit = element(by.css('#robotsubmit'));
 };

 module.exports = new MainPage();

