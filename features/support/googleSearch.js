const {When, Then, And, Given} = require("@cucumber/cucumber");
const expect = require("chai").expect;
const puppeteer = require("puppeteer")

var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

  Given('The browser is open', async function () {
    this.browser = await puppeteer.launch({headless:false})
    this.page = await this.browser.newPage();
  });

  When('open the Google page', async function () {
    await this.page.goto("https://google.com")
  });

  // When('search for chercher tech', async function () {
  //   await this.page.waitForSelector("[name='q']")
  //   await this.page.type("[name='q']", "chercher tech")
  //   await this.page.keyboard.press('Enter');
  //   //await this.page.click("[name='btnK']")
  // });

  When('search for cucumber js', async function () {
      await this.page.waitForSelector("[name='q']")
    await this.page.type("[name='q']", "cucumber js")
    await this.page.keyboard.press('Enter');
    //await this.page.click("[name='btnK']")
  });

  Then('get the website url', async function () {
    this.page.waitForTimeout(4000);
    const url = await this.page.url();
    const pageTitle = await this.page.title();
    console.log(url)
    console.log(pageTitle)
    expect(url).to.be.a('string','https://www.google.com/');
    expect(pageTitle).to.be.a('integer',4);
    //await this.browser.close()
    
  });
  Then('Count the results', async function () {
    // var linkTexts = await this.page.$$eval(".plan-features a",
    // elements=> elements.map(item=>item.textContent))
    // // prints a array of text
    // console.log(linkTexts.length)

     //uncomment close statement if you want
 
    // await this.page.url;
    //    await this.browser.close()
  });