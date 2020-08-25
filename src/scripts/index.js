import "../styles/index.scss";
import Card from "./card";

const Suits = ["Clubs", "Diamond", "Heart", "Spades"];
const CardsInSuits = 13;

class MainContainer {
  constructor() {
    this.state = {
      deck: [],
      drawnCards: [],
      remainingCards: [],
      drawItemPosition: 0,
    };
    this.initDeckState();
    //randomiseDeck();
    document.addEventListener("DOMContentLoaded", () => {
      this.renderDeck();
      document.getElementById("cards-holder").addEventListener("click", (e) => {
        if (e.target.classList.contains("card-suit")) {
          this.drawCard(e);
        }
      });
    });
  }
  initDeckState() {
    let deck = [];
    Suits.forEach((Suit, suitIndex) => {
      for (let i = 0; i < CardsInSuits; i++) {
        deck.push({
          id: suitIndex * 13 + (i + 1),
          suit: Suit,
          cardNumber: i + 1,
        });
      }
    });
    this.state = {
      ...this.state,
      deck,
      remainingCards: deck,
    };
  }
  renderDeck() {
    let remainingCardsLength = this.state.remainingCards.length;
    if (remainingCardsLength) {
      let lastCard = this.state.remainingCards[remainingCardsLength - 1];
      document.getElementById("cards-holder").innerHTML = Card.getCardTemplate(
        lastCard
      );
    } else {
      document.getElementById("cards-holder").innerHTML = "No More Cards";
    }
  }
  drawCard(e) {
    let lastCard = this.removeLastCardFromDeck();

    this.renderDeck();
    if (this.state.drawItemPosition > 4) {
      this.state.drawItemPosition = 0;
    } else {
      this.state.drawnCards[this.state.drawItemPosition++] = lastCard;
    }

    let template = "";
    // let limiter = 0;
    this.state.drawnCards.forEach((card) => {
      template += Card.getCardTemplate(card);
    });
    document.getElementById("card-items").innerHTML = template;
  }
  removeLastCardFromDeck() {
    return this.state.remainingCards.pop();
  }
}

new MainContainer();
