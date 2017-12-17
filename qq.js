const puppeteer = require('puppeteer');
const http = require('http');  

(async () => {
 
  const requestHandler = (request, response) => {  
    console.log(request.url)
    response.end('Hello World')
  }

  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listeningggg`)
  })
 
})();



function function2() {
(async () => {

  // Get the "viewport" of the page, as reported by the page.
  
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto('http://teoxili.zohosites.com');
          for (ii =0; ii < 4; ii++) {
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
