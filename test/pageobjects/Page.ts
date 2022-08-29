import logger from "../services/Logger";

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string) {
        return browser.url(path);
    }

    async clickElement(element: WebdriverIO.Element, sleepTime?: number): Promise<boolean> {
        const isExisting = await element.isExisting();
        const elementsText = await element.getText();
        logger.info('Clicking on element with selector: ' + element.selector);
        if (isExisting) {
            element.click();
            logger.debug(' Element (with text) is clicked: ' + elementsText);
        }
        return isExisting;
    }

    async setValueToElement(element: WebdriverIO.Element, value: string | number): Promise <boolean> {
        const isExisting: boolean = await element.isExisting();
        await logger.debug(` Element for setting value "${value}" exists: ${isExisting}`);
        if (isExisting) {
            await this.clickElement(element);
            await logger.info(`Setting value "${value}" to field with selector "${element.selector}"`);
            await element.setValue(value);
        }
        return isExisting;
    }
}
