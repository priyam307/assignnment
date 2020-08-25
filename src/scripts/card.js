class Card {
  getCardTemplate(cardInfo) {
    return `
    <div data-id="${cardInfo.id}" class="card">
        <div class="top-left"> ${cardInfo.cardNumber}</div>
        <div class="card-suit">${cardInfo.suit}</div>
        <div class="bottom-right"> ${cardInfo.cardNumber}</div>
    </div>
    `;
  }
}

export default new Card();
