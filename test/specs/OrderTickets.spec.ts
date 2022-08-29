import Tickets from '../pageobjects/Tickets';
import MainPage from '../pageobjects/Main';
import TicketsSelectPage from '../pageobjects/TicketsSelect.page';
import BasketTicketsPage from '../pageobjects/BasketTickets';


describe('Tickets ordering', () => {
    it('should find event and add tickets to cart', async () => {

        const eventId: string = '346597';
        const numberOfTicketsToBuy = 2;

        await MainPage.open('');
        await MainPage.searchEvent('Tallinn Coffee Festival');
        await MainPage.selectEventById(eventId);
        await Tickets.clickMainBuyButton(eventId);
        await TicketsSelectPage.findTicketsAndConfirmSelection(numberOfTicketsToBuy);
        await BasketTicketsPage.checkout('ziugs@hotmail.com');
        await expect(BasketTicketsPage.numberOfTicketsInBasket).toEqual(numberOfTicketsToBuy);
    });
});
