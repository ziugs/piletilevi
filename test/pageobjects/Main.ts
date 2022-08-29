import Page from "./Page";


class Main extends Page {

    get searchInput(): Promise<WebdriverIO.Element> {return $('[name="search"]');}
    get eventCards(): Promise<Array<WebdriverIO.Element>> {return $$('[data-event-id]');}

    async selectEventById(dataEventId:string): Promise<boolean>{
        for (let element of await this.eventCards){
            const dataEventIdAttribute: string = await element.getAttribute('data-event-id');
            if(dataEventIdAttribute != null && dataEventIdAttribute.includes(dataEventId)){
                return super.clickElement(element);
            }
        }
        return false;
    }

    async searchEvent(event: string): Promise<void> {
        await super.clickElement(await this.searchInput);
        await browser.pause(1000);
        await super.setValueToElement(await this.searchInput, event);
        await browser.pause(1000);

    }
}

export default new Main();
