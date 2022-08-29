import Page from './Page';


class Tickets extends Page {

    get mainBuyButton(): Promise<Array<WebdriverIO.Element>> {return $$('[data-shopurl]');}

    async clickMainBuyButton(eventId: string): Promise<boolean> {
        for (let element of await this.mainBuyButton){
            console.log(await element.getAttribute('data-shopurl'));
            const dataShopUrlAttribute: string = await element.getAttribute('data-shopurl');
            if(dataShopUrlAttribute != null && dataShopUrlAttribute.includes(eventId)){
                await browser.pause(1000);
                return await super.clickElement(element);
            }
        }
        return false;
    }
}

export default new Tickets();
