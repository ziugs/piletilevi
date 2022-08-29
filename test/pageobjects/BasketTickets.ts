import Page from "./Page";


class BasketTickets extends Page{

    get emailInput(): Promise<WebdriverIO.Element> {return $('//*[@id="email"]');} //input[id="email"]
    get proceedToCheckoutButton(): Promise<WebdriverIO.Element> {return $('/html/body/div[5]/div[2]/div[2]/div[2]/div[1]/div[2]/div/div[2]/div[3]/div/app-delivery/div[4]/form/div/app-ui-button/button');}
    get appCheckoutTicket(): Promise<Array<WebdriverIO.Element>> {return $$('<app-checkout-ticket />');} //input[id="email"]

    numberOfTicketsInBasket: number = 0;

    async checkout(email: string):Promise<void>{
        await browser.pause(1000);
        await (await this.emailInput).setValue(email);
        await super.clickElement(await this.proceedToCheckoutButton);
        await browser.pause(10000);
        this.numberOfTicketsInBasket = (await this.appCheckoutTicket).length;
    }
}

export default new BasketTickets();
