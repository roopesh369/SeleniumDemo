const { Builder, By, Key } = require("selenium-webdriver");
// const assert = require("assert");
var should = require("chai").should();

//describe block
describe("add 2 nd todo tests", function() {

it("1st test in second Test", async function() {
  let driver = await new Builder().forBrowser("chrome").build();
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
it("2nd test in second Test", async function() {
  let driver = await new Builder().forBrowser("chrome").build();
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
    todoText.should.equal("Learn Javascript");
  //close browser
  await driver.quit();
});
});









