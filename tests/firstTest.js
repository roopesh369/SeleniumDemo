const { Builder, By, Key } = require("selenium-webdriver");
// const assert = require("assert");
var should = require("chai").should();

//describe block
describe("add todo tests", function() {

if("successfully adds a todo to application", function() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://lambdatest.github.io/sample-todo-app/");
  //add todo
  await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);
  //assert
  let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (v) {
      return v;
    });
    //assert using node
    // assert.strictEqual(todoText,"Learn Selenium")
    //assert using chai
    todoText.should.equal("Learn Selenium");
  //close browser
  await driver.quit();
});
});









