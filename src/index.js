function openMenu() {
    document.getElementById('sideMenu').style.width = '350px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    document.getElementById('arrowNav').style.transform = 'rotate(180deg)'
}

function closeMenu() {
    document.getElementById('sideMenu').style.width = '210px';
    document.getElementById('arrowNav').style.transform = 'rotate(0deg)'
}

let elements = [];
function getDivs() {
    for (let i = 1; i < 3; i++) {
        let element = document.getElementById(`story${i}`)
        elements.push(element);
    }
}

getDivs();

