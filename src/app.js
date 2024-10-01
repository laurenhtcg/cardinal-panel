

function formatText(data) {
    var s = "";
    data.forEach(card => {
        s += `${card.card_count} ${card.card_name}\n`;
    });

    return s;
}

function populateCards(cardData) {
    var textarea = document.getElementById("cardsList");
    textarea.textContent = formatText(cardData);
    
    textarea.style.height = "auto";
    textarea.style.height = (5 + textarea.scrollHeight) + "px";
}