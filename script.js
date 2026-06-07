// タブ切り替え機能
function switchTab(button, tabId) {
    // クリックされたボタンの親（カード）を特定
    let card = button.closest('.char-card');
    
    // そのカード内のすべてのボタンから active クラスを消す
    let buttons = card.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // そのカード内のすべてのタブコンテンツを非表示にする
    let contents = card.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // 選択されたボタンとコンテンツを活性化
    button.classList.add('active');
    card.querySelector(`#${tabId}`).classList.add('active');
}

// 検索機能
function searchCharacters() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.getElementsByClassName('char-card');

    for (let i = 0; i < cards.length; i++) {
        let nameData = cards[i].getAttribute('data-name').toLowerCase();
        let tagData = cards[i].getAttribute('data-tag').toLowerCase();
        
        if (nameData.includes(input) || tagData.includes(input)) {
            cards[i].style.display = ""; 
        } else {
            cards[i].style.display = "none"; 
        }
    }
}
