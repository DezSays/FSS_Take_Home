describe("Input Value Test", () => {
  it("should set and get value for an input", async () => {
    
    browser.url("http://127.0.0.1:5500/FSS_Take_Home/index.html");
    await $('[data-field="score"]').setValue("123");
    
    // According to the webdriverio documentation (element > setValue), the line below should log the value in the console. However, I was unable to view it so I used the method below. 
    // console.log(await $('[data-field="score"]').getValue()); 

    await browser.execute(() => {
      const inputField = document.querySelector('[data-field="score"]');
      console.log("Value:", inputField.value);
    });

    // Comment in to see the browser console and confirm value
    // await browser.debug();
  });
});
