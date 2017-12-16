const puppeteer = require('puppeteer');

function function2() {
(async () => {

  // Get the "viewport" of the page, as reported by the page.
  
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto('http://teoxili.zohosites.com');
          for (ii =0; ii < 30; ii++) {
          const dimensions = await page.evaluate(() => {
            return {
              width: document.documentElement.clientWidth,
              height: document.documentElement.clientHeight,
              deviceScaleFactor: window.devicePixelRatio
            };
          });

          console.log('Dimensions:', dimensions);
          }
           await browser.close();
     
})();

}
 
var i = 0, howManyTimes = 10;
function f() {
    function2();
    console.log(Date()); 
    setTimeout( f, 50000 ); 
}
f();
