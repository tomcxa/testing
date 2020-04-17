/* eslint-disable max-len */
import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('Valid form', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';
    beforeAll(async () => {
        browser = await puppetteer.launch({
            // headless: false, // show gui
            // slowMo: 50,
            // devtools: true, // show devTools
        });
        page = await browser.newPage();
    });
    afterAll(async () => {
        await browser.close();
    });
    describe('valid form', () => {
        test('should test input card number', async () => {
            await page.goto(baseUrl);
            const form = await page.$('.form');
            const input = await form.$('.form-input');
            const submit = await form.$('.btn');

            await input.type('4561 2612 1234 54675');

            submit.click();
            await page.waitForFunction(() => {
                const test = document.querySelector('.form-input');
                return test.placeholder === 'Unvalid card number!';
            });

            await input.type('4561 2612 1234 5467');
            submit.click();
            await page.waitForSelector('.card-selected');
        });
    });
});
