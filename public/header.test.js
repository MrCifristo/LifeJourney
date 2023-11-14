const puppeteer = require('puppeteer');

describe('Pruebas del Header', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Los enlaces del header deben dirigir a las páginas correctas', async () => {
        await page.goto('http://localhost:8000'); // Asegúrate de que esta sea la URL correcta de tu sitio web

        const links = [
            { selector: 'a[href="home.html"]', expectedUrl: 'http://localhost:8000/home.html' },
            { selector: 'a[href="historial.html"]', expectedUrl: 'http://localhost:8000/historial.html' },
            { selector: 'a[href="friends.html"]', expectedUrl: 'http://localhost:8000/friends.html' },
            // Añade aquí más enlaces según tu página
        ];

        for (const link of links) {
            await page.click(link.selector);
            await page.waitForNavigation();

            const url = await page.url();
            expect(url).toBe(link.expectedUrl);

            await page.goBack(); // Regresa a la página principal antes de probar el siguiente enlace
        }
    });
});
