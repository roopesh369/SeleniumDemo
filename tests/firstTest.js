const {Builder} = require('selenium-webdriver');
async function example(){
    let driver = new Builder().forBrowser("chrome").build();
    driver.get("https://lambdatest.github.io/sample-todo-app/");
}

example();