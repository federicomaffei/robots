'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
    page.upperxInput.clear();
    page.upperyInput.clear();
  });

  it('should create robot with correct data', function() {
    page.upperxInput.sendKeys("1");
    page.upperyInput.sendKeys("1");
    element(by.model('firstOrientation')).$('[value="1"]').click().then(function(){
      page.robotSubmit.click().then(function(){
        expect(element(by.css("#position1")).getText()).toBe('Robot 1 position: 1 1 N');
      });
    });
  });

  it('should move the robot and return correct position as acceptance test 1', function(){
    page.upperxInput.sendKeys("1");
    page.upperyInput.sendKeys("2");
    element(by.model('firstOrientation')).$('[value="1"]').click().then(function(){
      page.robotSubmit.click().then(function(){
        element(by.id("moveinput1")).sendKeys('LMLMLMLMM');
        element(by.id("movebutton1")).click().then(function(){
          expect(element(by.css("#position1")).getText()).toBe('Robot 1 position: 1 3 N');
        });
      });
    });;
  });
});
