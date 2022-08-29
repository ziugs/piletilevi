import Page from './Page';


class TicketsSelectPage extends Page {

    get numberOfTicketsInput(): Promise<WebdriverIO.Element> {return $('//*[@id="1"]');}
    get findTicketsButton(): Promise<WebdriverIO.Element>  {return $('/html/body/div[5]/div[2]/div[2]/div[2]/div[1]/div[1]/app-tickets-selection/div[2]/div/div/app-price-classes-selector/div[2]/app-ui-button/button');}
    get confiramtionButton(): Promise<WebdriverIO.Element> {return $('/html/body/div[5]/div[2]/div[2]/div[2]/div[1]/div[1]/app-tickets-selection/div[2]/div[2]/app-ui-button[1]/button');}

    async findTicketsAndConfirmSelection(numberOfTickets: number): Promise<void> {
        await (await this.numberOfTicketsInput).setValue(numberOfTickets);
        await browser.pause(1000);
        await super.clickElement(await this.findTicketsButton);
        await browser.pause(3000);
        await super.clickElement(await this.confiramtionButton);
    }
}

export default new TicketsSelectPage();
