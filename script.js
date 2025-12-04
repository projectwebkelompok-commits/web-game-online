// Data game coming soon (dummy data dengan gambar online nyata yang sesuai dengan nama game)
const games = [
    {
        title: "Battlefield 4",
        release: "Desember 2025",
        image: "Game1.png", // Gambar aksi militer untuk Battlefield
        description: "Pengalaman perang epik dengan grafis memukau dan mode multiplayer yang intens. Rasakan adrenalin pertempuran di medan tempur yang realistis!"
    },
    {
        title: "Need for Speed: Most Wanted New",
        release: "Januari 2026",
        image: "Game2.png", // Gambar balapan mobil untuk Most Wanted
        description: "Balapan liar di jalanan kota dengan mobil supercar. Tantang teman-temanmu dalam mode multiplayer dan rebut gelar Most Wanted!"
    },
    {
        title: "Grand Theft Auto V New Generation",
        release: "Februari 2026",
        image: "Game3.png", // Gambar aksi kota untuk GTA V
        description: "Petualangan kriminal di Los Santos yang penuh aksi, cerita mendalam, dan dunia terbuka yang luas. Mainkan sebagai penjahat ulung!"
    },
    {
        title: "The Witcher 3: Wild Hunt",
        release: "Maret 2026",
        image: "Game4.png", // Gambar fantasi RPG untuk Witcher
        description: "RPG epik dengan dunia fantasi yang kaya, monster menakutkan, dan pilihan cerita yang memengaruhi nasib dunia. Jadilah pemburu monster legendaris!"
    },
    {
        title: "FIFA 25",
        release: "Desember 2025",
        image: "Game5.png", // Gambar sepakbola untuk FIFA
        description: "Simulasi sepakbola terdepan dengan mode karir, Ultimate Team, dan gameplay yang realistis. Bawa tim impianmu menuju kemenangan!"
    },
    {
        title: "Minecraft",
        release: "Mei 2026",
        image: "Game6.png", // Gambar kreatif blok untuk Minecraft (saya gunakan yang sama karena relevan, tapi bisa diganti jika perlu)
        description: "Bangun dunia impianmu dari blok-blok sederhana. Eksplorasi, bertahan hidup, atau ciptakan apa saja dalam mode kreatif yang tak terbatas!"
    }
];

// Fungsi untuk render game cards dengan animasi
function renderGames() {
    const gameList = document.getElementById('game-list');
    games.forEach((game, index) => {
        const card = `
            <div class="col-md-4 mb-4 animate-fade-in" style="animation-delay: ${index * 0.2}s;">
                <div class="card">
                    <img src="${game.image}" class="card-img-top" alt="${game.title}">
                    <div class="card-body">
                        <h5 class="card-title">${game.title}</h5>
                        <p class="card-text">${game.description}</p>
                        <p class="text-muted">Rilis: ${game.release}</p>
                    </div>
                </div>
            </div>
        `;
        gameList.innerHTML += card;
    });
}

// Panggil fungsi saat halaman load
document.addEventListener('DOMContentLoaded', renderGames);