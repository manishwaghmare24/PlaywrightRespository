import {test,expect} from '@playwright/test';
test("Verfiytxtinput",async({page}) =>
{
     await page.goto('https://demoqa.com/');

     const ele = await page.getByText('Elements');

     await ele.click();

     const textbox = await page.getByText('Text Box');

     await textbox.click();

     const url = await page.url();

     console.log('Url' + url);

     const fullname = await page.getByPlaceholder('Full Name');
     await fullname.fill('Manish Waghmare');

     const emaildi = await page.getByPlaceholder('name@example.com');
     await emaildi.fill('Manish@xyz.com');

     const curraddr = await page.getByPlaceholder('Current Address');
     await curraddr.fill('Vashi');

     const submitbutton = await page.getByRole('button',{name:'submit'});
      expect(submitbutton).toBeEnabled();
     await submitbutton.click();

    



});