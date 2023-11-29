document.addEventListener('DOMContentLoaded', function() {
    createYinYangNav();
});

function createYinYangNav() {
    var nav = document.getElementById('yinYangNav');
    nav.innerHTML = '<object type="image/svg+xml" data="yin-yang.svg" id="yinYangSVG"></object>';

    nav.querySelector('#yinYangSVG').addEventListener('load', function() {
        console.log('SVG loaded');
        var svgDoc = this.contentDocument; // Changed from getSVGDocument() for better compatibility
        if (svgDoc) {
            console.log('SVG document found');
            attachClickListeners(svgDoc);
        } else {
            console.error("SVG Document not found");
        }
    });
}

function attachClickListeners(svgDoc) {
    // Changed IDs to lowercase to ensure they match the SVG exactly
    var loveYourself = svgDoc.getElementById("loveyourself");
    var loveNature = svgDoc.getElementById("lovenature");
    var loveCommunity = svgDoc.getElementById("lovecommunity");

    // Checking for the existence of each element and whether it has been correctly referenced
    ['LoveYourself', 'LoveNature', 'LoveCommunity'].forEach(function(id) {
        var element = svgDoc.getElementById(id);
        if (element) {
            console.log(id + ' element found', element);
            element.addEventListener('click', function(event) {
                console.log(id + ' clicked');
                navigateToPage(id.replace('Love', 'Love ')); // Adjust the string to match the case
                event.preventDefault(); // Prevents any default action for the click event
            });
        } else {
            console.log(id + ' element not found');
        }
    });
}





function navigateToPage(section) {
    console.log('navigateToPage called for:', section);
    var contentDiv = document.getElementById('content');
    contentDiv.style.display = 'block';
    contentDiv.innerHTML = '';

    switch(section) {
        case 'Love Yourself':
            loadLoveYourselfPage();
            break;
        case 'Love Nature':
            loadLoveNaturePage();
            break;
        case 'Love Community':
            loadLoveCommunityPage();
            break;
    }
}

function loadLoveYourselfPage() {
    console.log('Loading Love Yourself page');
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h1>Love Yourself</h1>
        <p>Place your thumb on your wrist with your hand facing down. Tap your heartbeat on the spacebar to share love.</p>
        <div class='tiles'></div>
        <button class="button" onclick="navigateToPage('')">Return Home</button>`;
}


function loadLoveNaturePage() {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h1>Love Nature</h1>
        <p>10 animals are in this world, type 'love' to add an animal and make the earth more biodiverse.</p>
        <div class='tiles'></div>
        <button class="button" onclick="navigateToPage('')">Return Home</button>`;
}

function loadLoveCommunityPage() {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h1>Love Community</h1>
        <p>Describe why you love someone close to you.</p>
        <div class='tiles'></div>
        <button class="button" onclick="navigateToPage('')">Return Home</button>`;
}
