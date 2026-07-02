import {test,expect} from '@playwright/test';

test("Navigate to Url",async({page}) =>{
 

    await page.goto('https://demoqa.com/');

    let textbox = await page.getByText("Text Box");
    await textbox.click;
   const title = await page.title();

   console.log("Titile name:" + title);

   await expect(page).toHaveTitle('demositee');
   

});