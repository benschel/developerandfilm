// Create a card element
function createCard(item) {
    return `
        <div class="card" onclick="toggleCard(this)">
            <div class="card-title">${item.title} ▼</div>
            <div class="card-details">
                <div class="section">
                    <div class="section-title">Overview</div>
                    <div class="section-content">${item.overview}</div>
                </div>
                <div class="section">
                    <div class="section-title">Strengths</div>
                    <div class="section-content">
                        <ul>
                            ${item.strengths.map(strength => `<li>${strength}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="section">
                    <div class="section-title">Weaknesses</div>
                    <div class="section-content">
                        <ul>
                            ${item.weaknesses.map(weakness => `<li>${weakness}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="pairing">
                    <div class="section-title">Best Pairing</div>
                    <div class="section-content">
                        <ul>
                            ${item.bestPairing.map(pairing => `<li>${pairing}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render the content based on current tab
function renderContent() {
    const filmPage = document.getElementById('filmPage');
    const developerPage = document.getElementById('developerPage');

    filmPage.innerHTML = filmData.films.map(film => createCard(film)).join('');
    developerPage.innerHTML = filmData.developers.map(developer => createCard(developer)).join('');
}

// Show/hide tabs
function showTab(tab) {
    document.getElementById('filmPage').style.display = tab === 'film' ? 'block' : 'none';
    document.getElementById('developerPage').style.display = tab === 'developer' ? 'block' : 'none';
    
    document.getElementById('filmTab').classList.toggle('active', tab === 'film');
    document.getElementById('developerTab').classList.toggle('active', tab === 'developer');
}

// Toggle card expansion
function toggleCard(card) {
    card.classList.toggle('open');
}

// Render content when the page loads
document.addEventListener('DOMContentLoaded', renderContent); 