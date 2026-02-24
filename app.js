// @ts-nocheck
const classes = [
    {
        id: "matematicas",
        name: "Matemáticas",
        period: "Periodo 5",
        teacher: "Katherine Kim",
        banner: "linear-gradient(120deg, #ad1457 0%, #ec407a 55%, #f48fb1 100%)",
        code: "mat-5-az3",
        assignments: ["Resolver guía de fracciones", "Subir foto del cuaderno"],
    },
    {
        id: "historia",
        name: "Historia",
        period: "Periodo 1",
        teacher: "Robert Doyle",
        banner: "linear-gradient(120deg, #607d8b 0%, #90a4ae 60%, #b0bec5 100%)",
        code: "his-1-qp9",
        assignments: ["Resumen de la revolución", "Actividad de línea temporal"],
    },
    {
        id: "biologia",
        name: "Biología",
        period: "Periodo 2",
        teacher: "Rolando Johnson",
        banner: "linear-gradient(120deg, #6a1b9a 0%, #8e24aa 55%, #ab47bc 100%)",
        code: "bio-2-kk4",
        assignments: ["Mapa de células", "Cuestionario de genética"],
    },
    {
        id: "informatica",
        name: "Informática",
        period: "Periodo 3",
        teacher: "Miguel López",
        banner: "linear-gradient(120deg, #37474f 0%, #455a64 60%, #607d8b 100%)",
        code: "inf-3-nr2",
        assignments: ["Mini app en JS", "Investigar APIs web"],
    },
    {
        id: "ingles",
        name: "Inglés",
        period: "Periodo 4",
        teacher: "Molly Sager",
        banner: "linear-gradient(120deg, #1565c0 0%, #1976d2 58%, #42a5f5 100%)",
        code: "eng-4-zx8",
        assignments: ["Essay corto", "Vocab quiz"],
    },
    {
        id: "geologia",
        name: "Geología",
        period: "Periodo 6",
        teacher: "Rolando Johnson",
        banner: "linear-gradient(120deg, #00695c 0%, #00897b 58%, #26a69a 100%)",
        code: "geo-6-vt1",
        assignments: ["Ficha de minerales", "Exposición de placas"],
    },
    {
        id: "educacion-fisica",
        name: "Educación Física",
        period: "Periodo 7",
        teacher: "Diana Pérez",
        banner: "linear-gradient(120deg, #ef6c00 0%, #fb8c00 55%, #ffb74d 100%)",
        code: "edf-7-hj5",
        assignments: ["Registrar rutina semanal", "Video de coordinación"],
    },
];

const peopleByClass = {
    default: [
        { name: "Mr. Johnson", role: "Profesor" },
        { name: "Ana Torres", role: "Estudiante" },
        { name: "Luis Díaz", role: "Estudiante" },
        { name: "Valeria Gómez", role: "Estudiante" },
    ],
};

const feedTemplates = [
    "Nueva tarea publicada",
    "Recordatorio de actividad",
    "Material de apoyo añadido",
    "Actualización de calificaciones",
];

const gameCatalog = [
    { name: "Snow Rider 3D", category: "Arcade", url: "https://itsvijaysingh.github.io/Snow-Rider3D/", note: "Trineo en 3D" },
    { name: "Eaglercraft", category: "Sandbox", url: "https://eaglercraft.com/", note: "Minecraft-like en navegador" },
    { name: "Krunker", category: "FPS", url: "https://krunker.io", note: "Shooter online" },
    { name: "Shell Shockers", category: "FPS", url: "https://shellshock.io", note: "FPS casual" },
    { name: "Venge", category: "FPS", url: "https://venge.io", note: "Arena shooter" },
    { name: "1v1.lol", category: "Battle", url: "https://1v1.lol", note: "Construcción + combate" },
    { name: "Slither", category: "Arcade", url: "https://slither.io", note: "Serpiente multijugador" },
    { name: "Agar", category: "Arcade", url: "https://agar.io", note: "Células multijugador" },
    { name: "Paper.io 2", category: "Arcade", url: "https://paper-io.com", note: "Domina territorios" },
    { name: "Diep", category: "Arcade", url: "https://diep.io", note: "Tanques y upgrades" },
    { name: "Tetris", category: "Puzzle", url: "https://tetris.com/play-tetris", note: "Clásico puzzle" },
    { name: "2048", category: "Puzzle", url: "https://play2048.co", note: "Números y estrategia" },
    { name: "Sudoku", category: "Puzzle", url: "https://sudoku.com", note: "Lógica" },
    { name: "Chess", category: "Estrategia", url: "https://www.chess.com/play/computer", note: "Ajedrez online" },
    { name: "Lichess", category: "Estrategia", url: "https://lichess.org", note: "Ajedrez libre" },
    { name: "Catan Universe", category: "Estrategia", url: "https://catanuniverse.com", note: "Juego de mesa" },
    { name: "Forge of Empires", category: "Estrategia", url: "https://forgeofempires.com", note: "Construcción de imperio" },
    { name: "Townscaper", category: "Creativo", url: "https://oskarstalberg.com/Townscaper/", note: "Construcción relajante" },
    { name: "Little Alchemy 2", category: "Creativo", url: "https://littlealchemy2.com", note: "Combina elementos" },
    { name: "GeoGuessr", category: "Educativo", url: "https://www.geoguessr.com", note: "Adivina lugares" },
    { name: "Seterra", category: "Educativo", url: "https://www.seterra.com", note: "Mapas y geografía" },
    { name: "Typing Club", category: "Educativo", url: "https://www.typingclub.com", note: "Mecanografía" },
    { name: "Monkeytype", category: "Educativo", url: "https://monkeytype.com", note: "Velocidad de escritura" },
    { name: "Skribbl", category: "Casual", url: "https://skribbl.io", note: "Dibuja y adivina" },
    { name: "Gartic", category: "Casual", url: "https://gartic.io", note: "Juego social" },
    { name: "Poki", category: "Portal", url: "https://poki.com", note: "Muchos juegos HTML5" },
    { name: "CrazyGames", category: "Portal", url: "https://www.crazygames.com", note: "Portal grande" },
    { name: "Y8", category: "Portal", url: "https://www.y8.com", note: "Clásicos online" },
    { name: "Miniclip", category: "Portal", url: "https://www.miniclip.com/games/en/", note: "Arcade y deportes" },
    { name: "Pacman", category: "Arcade", url: "https://www.google.com/logos/2010/pacman10-i.html", note: "Retro" },
    { name: "Slope", category: "Arcade", url: "https://slopegame.io", note: "Reflejos" },
    { name: "Run 3", category: "Arcade", url: "https://run3freegame.com", note: "Runner espacial" },
    { name: "Moto X3M", category: "Carreras", url: "https://www.coolmathgames.com/0-moto-x3m", note: "Motos y físicas" },
    { name: "Drift Hunters", category: "Carreras", url: "https://drifthunters2.io", note: "Derrapes" },
    { name: "Madalin Stunt Cars", category: "Carreras", url: "https://www.crazygames.com/game/madalin-cars-multiplayer", note: "Autos online" },
    { name: "Basket Random", category: "Deportes", url: "https://www.twoplayergames.org/game/basket-random", note: "Baloncesto arcade" },
    { name: "Soccer Random", category: "Deportes", url: "https://www.twoplayergames.org/game/soccer-random", note: "Fútbol arcade" },
    { name: "Retro Bowl", category: "Deportes", url: "https://retrobowl.me", note: "Fútbol americano" },
    { name: "Wordle", category: "Puzzle", url: "https://www.nytimes.com/games/wordle/index.html", note: "Palabras" },
    { name: "Crossword", category: "Puzzle", url: "https://www.boatloadpuzzles.com/playcrossword", note: "Crucigramas" },
    { name: "Hextris", category: "Puzzle", url: "https://hextris.github.io/hextris/", note: "Puzzle open source" },
    { name: "Open Sudoku", category: "Puzzle", url: "https://sugoku.herokuapp.com", note: "Sudoku rápido" },
    { name: "Realmz", category: "MMO", url: "https://www.realmofthemadgod.com", note: "MMO pixel" },
    { name: "Surviv", category: "Battle", url: "https://survev.io", note: "Battle royale 2D" },
    { name: "Zombs Royale", category: "Battle", url: "https://zombsroyale.io", note: "Battle royale" },
    { name: "Evowars", category: "Arcade", url: "https://evowars.io", note: "Combate evolutivo" },
    { name: "Hole.io", category: "Arcade", url: "https://hole-io.com", note: "Come la ciudad" },
    { name: "Bloxd", category: "Sandbox", url: "https://bloxd.io", note: "Bloques online" },
    { name: "BuildNow", category: "Battle", url: "https://buildnow.gg", note: "Construye y dispara" },
    { name: "Rocket Bot Royale", category: "Battle", url: "https://rocketbotroyale.winterpixel.io", note: "Tanques battle royale" },
    { name: "Cookie Clicker", category: "Idle", url: "https://orteil.dashnet.org/cookieclicker/", note: "Incremental" },
    { name: "A Dark Room", category: "Idle", url: "https://adarkroom.doublespeakgames.com", note: "Texto incremental" },
    { name: "Trimps", category: "Idle", url: "https://trimps.github.io", note: "Estrategia idle" },
    { name: "Sandspiel", category: "Creativo", url: "https://sandspiel.club", note: "Simulador de partículas" },
    { name: "Falling Sand", category: "Creativo", url: "https://powdertoy.co.uk", note: "Laboratorio sandbox" },
    { name: "Quick Draw", category: "Educativo", url: "https://quickdraw.withgoogle.com", note: "Dibujo con IA" },
    { name: "CodeCombat", category: "Educativo", url: "https://codecombat.com", note: "Aprende programación" },
    { name: "Blockly Games", category: "Educativo", url: "https://blockly.games", note: "Programación visual" },
    { name: "Khan Academy Computing", category: "Educativo", url: "https://www.khanacademy.org/computing", note: "Lecciones interactivas" },
    { name: "Classic Minecraft", category: "Sandbox", url: "https://classic.minecraft.net", note: "Versión clásica oficial" },
    { name: "Robostorm", category: "FPS", url: "https://www.crazygames.com/game/robostorm", note: "Shooter robots" },
    { name: "Tank Trouble", category: "Arcade", url: "https://tanktrouble.com", note: "Tanques local/multi" },
    { name: "Superhex", category: "Arcade", url: "https://www.coolmathgames.com/0-super-hexagon", note: "Reflejos extremos" },
    { name: "OvO", category: "Plataformas", url: "https://ovogame.github.io", note: "Parkour minimal" },
    { name: "Vex 6", category: "Plataformas", url: "https://www.crazygames.com/game/vex-6", note: "Acción parkour" },
    { name: "Bad Ice Cream", category: "Casual", url: "https://www.twoplayergames.org/game/bad-ice-cream", note: "Co-op local" },
    { name: "Fireboy & Watergirl", category: "Casual", url: "https://www.coolmathgames.com/1-fireboy-watergirl-forest-temple", note: "Cooperativo" },
    { name: "Word Search", category: "Puzzle", url: "https://thewordsearch.com", note: "Sopa de letras" },
    { name: "Minesweeper", category: "Puzzle", url: "https://minesweeperonline.com", note: "Buscaminas" },
];

const app = document.getElementById("app");
const view = document.getElementById("view");

function getCustomGames() {
    try {
        const parsed = JSON.parse(localStorage.getItem("classroorn.customGames") || "[]");
        if (!Array.isArray(parsed)) {
            return [];
        }
        return parsed.filter((item) => item.name && item.url);
    } catch {
        return [];
    }
}

function saveCustomGames(games) {
    localStorage.setItem("classroorn.customGames", JSON.stringify(games));
}

function route() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const parts = hash.split("/").filter(Boolean);

    if (parts.length === 0) {
        renderDashboard();
        return;
    }

    if (parts[0] === "class" && parts[1]) {
        renderClassView(parts[1], parts[2]);
        return;
    }

    renderDashboard();
}

function renderDashboard() {
    const template = document.getElementById("dashboard-template").content.cloneNode(true);
    const grid = template.getElementById("classGrid");

    classes.forEach((cls) => {
        const card = document.createElement("article");
        card.className = "class-card";
        card.innerHTML = `
      <div class="class-card-banner" style="background:${cls.banner}">
        <h3>${cls.name}</h3>
        <p>${cls.period}</p>
      </div>
      <div class="class-card-body">
        <p><strong>${cls.teacher}</strong></p>
        <p>Tienes ${cls.assignments.length} actividades nuevas.</p>
      </div>
      <div class="class-card-footer"><span>📁</span><span>🧪</span></div>
    `;
        card.addEventListener("click", () => {
            location.hash = `/class/${cls.id}`;
        });
        grid.appendChild(card);
    });

    view.innerHTML = "";
    view.appendChild(template);
}

function renderClassView(classId, initialTab = "stream") {
    const currentClass = classes.find((item) => item.id === classId);
    if (!currentClass) {
        renderDashboard();
        return;
    }

    const template = document.getElementById("class-template").content.cloneNode(true);
    const hero = template.getElementById("classHero");
    const layout = template.getElementById("classLayout");

    hero.style.background = currentClass.banner;
    hero.innerHTML = `
    <div>
      <h2>${currentClass.name}</h2>
      <p>${currentClass.period}</p>
      <p class="class-code">Código de clase: ${currentClass.code}</p>
    </div>
    <div class="small">Sitio interno: classroorn.com/#/class/${currentClass.id}</div>
  `;

    view.innerHTML = "";
    view.appendChild(template);

    const tabs = view.querySelectorAll(".tab-btn");
    tabs.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            tabs.forEach((b) => b.classList.remove("active"));
            tabBtn.classList.add("active");
            drawClassPanel(currentClass, tabBtn.dataset.tab, layout);
        });
    });

    const allowedTabs = ["stream", "classwork", "people", "games"];
    const targetTab = allowedTabs.includes(initialTab) ? initialTab : "stream";
    const initialTabButton = [...tabs].find((tabBtn) => tabBtn.dataset.tab === targetTab);

    tabs.forEach((b) => b.classList.remove("active"));
    if (initialTabButton) {
        initialTabButton.classList.add("active");
    }

    drawClassPanel(currentClass, targetTab, layout);
}

function drawClassPanel(currentClass, tab, layout) {
    layout.innerHTML = "";

    if (tab === "stream") {
        const panel = document.getElementById("stream-panel-template").content.cloneNode(true);

        const upcoming = panel.getElementById("upcomingList");
        currentClass.assignments.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            upcoming.appendChild(li);
        });

        const feed = panel.getElementById("feedList");
        for (let i = 0; i < 5; i++) {
            const card = document.createElement("article");
            card.className = "feed-card";
            card.innerHTML = `
        <div class="feed-title">${currentClass.teacher} publicó: ${feedTemplates[i % feedTemplates.length]}</div>
        <div class="feed-time">${8 + i}:00 AM</div>
      `;
            feed.appendChild(card);
        }

        layout.appendChild(panel);
        return;
    }

    if (tab === "classwork") {
        const panel = document.getElementById("classwork-panel-template").content.cloneNode(true);
        const board = panel.getElementById("classworkList");

        currentClass.assignments.forEach((task, index) => {
            const item = document.createElement("article");
            item.className = "board-item";
            item.innerHTML = `<strong>Tarea ${index + 1}</strong><p class="muted">${task}</p>`;
            board.appendChild(item);
        });

        if (currentClass.id === "educacion-fisica") {
            const bonus = document.createElement("article");
            bonus.className = "board-item";
            bonus.innerHTML = `<strong>Truquito desbloqueado</strong><p class="muted">Ve a la pestaña Arcade para jugar HTML5, sandbox, shooters y más dentro del mismo sitio.</p>`;
            board.appendChild(bonus);
        }

        layout.appendChild(panel);
        return;
    }

    if (tab === "people") {
        const panel = document.getElementById("people-panel-template").content.cloneNode(true);
        const peopleList = panel.getElementById("peopleList");
        const people = peopleByClass[currentClass.id] || peopleByClass.default;

        people.forEach((person) => {
            const card = document.createElement("article");
            card.className = "person-card";
            card.innerHTML = `<strong>${person.name}</strong><p class="person-role">${person.role}</p>`;
            peopleList.appendChild(card);
        });

        layout.appendChild(panel);
        return;
    }

    if (tab === "games") {
        renderGamesPanel(layout);
    }
}

function renderGamesPanel(layout) {
    const panel = document.getElementById("games-panel-template").content.cloneNode(true);
    const gamesListView = panel.getElementById("gamesListView");
    const gamesPlayerView = panel.getElementById("gamesPlayerView");
    const search = panel.getElementById("gameSearch");
    const customGameForm = panel.getElementById("customGameForm");
    const customGameName = panel.getElementById("customGameName");
    const customGameUrl = panel.getElementById("customGameUrl");
    const customGameCategory = panel.getElementById("customGameCategory");
    const gameList = panel.getElementById("gameList");
    const chips = panel.getElementById("categoryChips");
    const playerShell = panel.getElementById("playerShell");
    const gameTitle = panel.getElementById("selectedGameTitle");
    const openExternal = panel.getElementById("openExternal");
    const backToGames = panel.getElementById("backToGames");

    let customGames = getCustomGames();
    let selectedCategory = "Todos";
    let selectedGameName = "";

    function showListView() {
        gamesListView.classList.remove("hidden");
        gamesPlayerView.classList.add("hidden");
    }

    function showPlayerView() {
        gamesListView.classList.add("hidden");
        gamesPlayerView.classList.remove("hidden");
    }

    function combinedCatalog() {
        return [...customGames, ...gameCatalog];
    }

    function drawCategoryChips() {
        chips.innerHTML = "";
        const categories = ["Todos", ...new Set(combinedCatalog().map((g) => g.category))];

        if (!categories.includes(selectedCategory)) {
            selectedCategory = "Todos";
        }

        categories.forEach((category) => {
            const chip = document.createElement("button");
            chip.className = `chip ${category === selectedCategory ? "active" : ""}`;
            chip.textContent = category;
            chip.addEventListener("click", () => {
                selectedCategory = category;
                drawCategoryChips();
                drawGameList();
            });
            chips.appendChild(chip);
        });
    }

    function drawGameList() {
        const term = search.value.trim().toLowerCase();
        gameList.innerHTML = "";

        const filtered = combinedCatalog().filter((game) => {
            const catOk = selectedCategory === "Todos" || game.category === selectedCategory;
            const textOk =
                game.name.toLowerCase().includes(term) ||
                game.note.toLowerCase().includes(term) ||
                game.category.toLowerCase().includes(term);
            return catOk && textOk;
        });

        filtered.forEach((game) => {
            const item = document.createElement("button");
            item.type = "button";
            item.className = `game-item ${selectedGameName === game.name ? "active" : ""}`;
            item.innerHTML = `<strong>${game.name}</strong><span>${game.category} · ${game.note}</span>`;
            item.addEventListener("click", () => {
                selectedGameName = game.name;
                gameTitle.textContent = game.name;
                openExternal.href = game.url;
                openExternal.textContent = "Abrir en pestaña";
                playerShell.innerHTML = `<iframe src="${game.url}" allow="fullscreen; autoplay; gamepad; clipboard-read; clipboard-write"></iframe>`;
                showPlayerView();
                drawGameList();
            });
            gameList.appendChild(item);
        });

        if (!filtered.length) {
            const empty = document.createElement("p");
            empty.className = "muted";
            empty.textContent = "Sin resultados. Prueba otra categoría o búsqueda.";
            gameList.appendChild(empty);
        }
    }

    customGameForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = customGameName.value.trim();
        const url = customGameUrl.value.trim();
        const category = customGameCategory.value.trim() || "Custom";

        if (!name || !url) {
            return;
        }

        let normalizedUrl = url;
        if (!/^https?:\/\//i.test(normalizedUrl)) {
            normalizedUrl = `https://${normalizedUrl}`;
        }

        const newGame = { name, category, url: normalizedUrl, note: "Agregado por usuario" };
        customGames = [newGame, ...customGames.filter((game) => game.name !== name)];
        saveCustomGames(customGames);

        customGameForm.reset();
        drawCategoryChips();
        drawGameList();
    });

    backToGames.addEventListener("click", () => {
        showListView();
    });

    search.addEventListener("input", drawGameList);
    drawCategoryChips();
    drawGameList();
    showListView();

    layout.appendChild(panel);
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);

window.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".site-footer.scroll-reveal-footer");
    if (!footer) {
        return;
    }

    const revealOffset = 8;

    const updateFooterVisibility = () => {
        const currentY = window.scrollY;
        const shouldShow = currentY > revealOffset;

        footer.classList.toggle("is-visible", shouldShow);
    };

    updateFooterVisibility();
    window.addEventListener("scroll", updateFooterVisibility, { passive: true });
});

document.getElementById("menuToggle").addEventListener("click", () => {
    location.hash = "/";
});

document.addEventListener("keydown", (event) => {
    if (event.code !== "Space") {
        return;
    }

    const target = event.target;
    const isTypingField =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.tagName === "SELECT" ||
            target.isContentEditable);

    if (isTypingField) {
        return;
    }

    event.preventDefault();
    location.hash = "/class/educacion-fisica/games";
});