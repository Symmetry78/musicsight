const music = document.querySelector('.music');

const renderSong = (data, id) => {
    const html = `
            <div class="gallery-item" data-id="${id}">
                <a href="PREVIEW.png" target="_blank">
                <img src="PREVIEW.png" alt="Song preview">
                <div class="overlay">
                    <span class="play-icon">▶</span>
                </div>
                </a>
                <div class="desc">
                    <p class="song-title">${data.title}</p>
                    <p class="artist-name">${data.artist}</p>
                </div>
            </div>
    `;
    music.innerHTML += html;
};