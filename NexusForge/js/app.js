// Array of models
const characterAndWeaponArray = [
    { id: 'character-one', title: 'Dark Souls', url: 'https://sketchfab.com/models/432805363a5542f8b368c9643db57c9c/embed?autostart=1&preload=1&transparent=1' },
    { id: 'character-two', title: 'Mech Robotic', url: 'https://sketchfab.com/models/a748deca84da4f84b90a3436d0783f89/embed?autostart=1&preload=1&transparent=1' },
    { id: 'character-three', title: 'Neon-style', url: 'https://sketchfab.com/models/8a01d75cedd245649b06055ca2dee931/embed?autostart=1&transparent=1' },
    { id: 'weapon-one', title: 'Sci-fi M13', url: 'https://sketchfab.com/models/648847589fec4ecc9b91d7cdcc9c4d84/embed?autostart=1&preload=1&transparent=1' },
    { id: 'weapon-two', title: 'Sci Fi Gameready', url: 'https://sketchfab.com/models/eca46c628f49410081eb73391c62b4ca/embed?autostart=1&preload=1&transparent=1' },
    { id: 'weapon-three', title: 'Ronan Rifle', url: 'https://sketchfab.com/models/55d8e4e977c54a989409dd80f9f2675a/embed?autostart=1&preload=1&transparent=1' },
];

const titleElement = document.getElementById('title');
const characterWeaponContainer = document.getElementById('character-and-weapon');
const thumbnails = document.querySelectorAll('.character-img');

function createSketchfabIframeHTML(title, url) {
    return `
        <iframe title="${title}" frameborder="0" allowfullscreen
            mozallowfullscreen="true" webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
            execution-while-out-of-viewport execution-while-not-rendered web-share
            src="${url}">
        </iframe>
    `;
}

function handleThumbnailClick(event) {
    event.preventDefault();
    const clickedThumbnailId = event.currentTarget.id;
    const selectedModel = characterAndWeaponArray.find(model => model.id === clickedThumbnailId);

    if (selectedModel) {
        titleElement.textContent = selectedModel.title;
        characterWeaponContainer.innerHTML = createSketchfabIframeHTML(selectedModel.title, selectedModel.url);
        animateTextSplit(titleElement, { trigger: '.sec-two', markers: true });
    }
}

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', handleThumbnailClick);
});

// Default model on load
document.addEventListener('DOMContentLoaded', () => {
    const initialModel = characterAndWeaponArray[0];
    if (initialModel) {
        titleElement.textContent = initialModel.title;
        characterWeaponContainer.innerHTML = createSketchfabIframeHTML(initialModel.title, initialModel.url);
        animateTextSplit(titleElement, { trigger: '.sec-two', markers: true });
    }
});

//         Section - Four

const legendArray = [
    {
        id: 'legend-thumbnail-one',
        src: 'assets/image/legend-one.png'
    },

    {
        id: 'legend-thumbnail-two',
        src: 'assets/image/legend-two.png'
    },

    {
        id: 'legend-thumbnail-three',
        src: 'assets/image/legend-three.png'
    },

    {
        id: 'legend-thumbnail-four',
        src: 'assets/image/legend-four.png'
    },

    {
        id: 'legend-thumbnail-five',
        src: 'assets/image/legend-five.png'
    }
];

const legendCharacter = document.getElementById('legend-character');
const legendThumb = document.querySelectorAll('.card-img');


function legendImgData(src) {
    return `
    <img src="${src}" alt="">`;
}


function thumbnailData(event) {
    event.preventDefault();

    const targetThumb = event.currentTarget.id;
    const selectLegend = legendArray.find(legend => legend.id === targetThumb);

    if (selectLegend) {
        legendCharacter.innerHTML = legendImgData(selectLegend.src)
    }
}

legendThumb.forEach(eachThumb => {
    eachThumb.addEventListener('click', thumbnailData)
})

document.addEventListener('DOMContentLoaded', () => {
    const initialLegend = legendArray[4];
    if (initialLegend) {
        legendCharacter.innerHTML = legendImgData(initialLegend.src);
    }
})
