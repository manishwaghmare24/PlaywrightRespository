import {test,expect} from '@playwright/test';

test('Verify checkbox', async({page}) =>{

     await page.goto('https://demoqa.com/');

     const ele = await page.getByText('Elements');

     await ele.click();

     const textbox = await page.getByText('Check Box');

     await textbox.click();

     const url = await page.url();

     console.log('Url' + url);
     const expandtree = await page.locator('.rc-tree-switcher');
     await expandtree.click();

     const Desktopcheck = await page.getByLabel('Select Desktop');
     await Desktopcheck.check();

    expect(Desktopcheck).toBeChecked();

});