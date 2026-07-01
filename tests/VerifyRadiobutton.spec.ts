import {test,expect} from '@playwright/test';

test('VerfiyRadio Button', async({page}) =>{

await page.goto('https://demoqa.com/');

     const ele = await page.getByText('Elements');

     await ele.click();

     const textbox = await page.getByText('Radio Button');

     await textbox.click();

     const url = await page.url();

     console.log('Url' + url);

     const radioyes = await page.getByText('Yes');

     expect(radioyes).toBeVisible();

     await radioyes.click();

     const value = await page.locator('.text-success').textContent();

     if(value === 'Yes'){
        await expect(page.locator('.text-success')).toHaveText('Yes');
     }else{
        await expect(page.locator('.text-success')).toHaveText('Impressive');
     }



});