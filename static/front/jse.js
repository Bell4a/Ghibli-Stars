// Array de filmes com título, descrição e URL do vídeo
const films = [
    {
        title: "Laputa - O Castelo no Céu",
        description: "<span class='fxetaria'>L</span> 1986 ‧ Aventura/Fantasia ‧ 2h 4m<br><br>Lá, no céu, uma ilha flutuante chamada Laputa esconde um segredo antigo. Pazu e Sheeta, com uma pedra mágica, devem unir forças para descobrir os mistérios dessa ilha.",
        videoUrl: "video1.mp4"
    },
    {
        title: "O Menino e a Garça",
        description: "<span class='fxetaria'>12</span> 2023 ‧ Fantasia/Aventura ‧ 2h 4m<br><br>Um jovem garoto chamado Mahito, ansiando por sua mãe, se aventura em um mundo compartilhado pelos vivos e os mortos. Ali, a morte encontra um fim e a vida encontra um começo.",
        videoUrl: "video2.mp4"
    },
    {
        title: "O Túmulo Dos Vagalumes",
        description: "<span class='fxetaria'>12</span> 1988 ‧ Guerra/Drama ‧ 1h 29m<br><br>Os irmãos Setsuko e Seita vivem no Japão em meio a Segunda Guerra Mundial. Após a morte da mãe em um bombardeio e a convocação do pai para a Guerra, eles vão morar com alguns parentes. Insatisfeitos, saem da cidade e acabam em um abrigo na floresta.",
        videoUrl: "video3.mp4"
    },
    {
        title: "Vidas Ao Vento",
        description: "<span class='fxetaria'>12</span> 2013 ‧ Drama/Guerra ‧ 2h 6m<br><br>Jiro Horikoshi é um jovem que vive em uma cidade no interior do Japão. Ele tem o sonho de voar em um avião com formato de pássaro. A partir desse sonho, Jiro decide que construir um avião como deseja e colocá-lo no ar é a meta de sua vida.",
        videoUrl: "video4.mp4"
    }
];

// Índice do filme atualmente exibido
let currentFilmIndex = 0;

// Referências aos elementos da interface
const titleElement = document.getElementById("film-title");   // Adicionado para o título
const descriptionElement = document.getElementById("film-description");
const videoFrame = document.getElementById("video-frame");

// Função para atualizar o slider com base no índice do filme
function updateSlider(index) {
    const film = films[index];
    titleElement.textContent = film.title; // Atualiza o título
    descriptionElement.innerHTML = film.description; // Atualiza a descrição com HTML
    videoFrame.src = film.videoUrl; // Atualiza a URL do vídeo
}

// Função para passar para o próximo filme
function nextFilm() {
    currentFilmIndex = (currentFilmIndex + 1) % films.length; // Incrementa e garante que volte ao início ao alcançar o fim
    updateSlider(currentFilmIndex);
}

// Função para voltar para o filme anterior
function prevFilm() {
    currentFilmIndex = (currentFilmIndex - 1 + films.length) % films.length; // Decrementa e garante que volte ao fim ao alcançar o início
    updateSlider(currentFilmIndex);
}

// Inicializar o slider com o primeiro filme
updateSlider(currentFilmIndex);

// Adicionar eventos de clique nos botões de navegação
document.getElementById("next-btn").addEventListener("click", nextFilm);
document.getElementById("prev-btn").addEventListener("click", prevFilm);