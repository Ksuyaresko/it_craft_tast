asideMenu('btn-aside', 'aside-menu', 'aside--opened', 'aside--opening', 'aside--closing');

function asideMenu(btnId, menuId, openedClass, animationOpeningClass, animationClosingClass) {
    var asideBtn = document.getElementById(btnId);
    var asideMenu = document.getElementById(menuId);
    asideBtn.addEventListener('click', function () {
        if (asideMenu.classList.contains(openedClass)) {
            asideMenu.classList.add(animationClosingClass);
            setTimeout(function () {
                asideMenu.classList.remove(animationClosingClass);
            }, 1000)
        } else {
            asideMenu.classList.add(animationOpeningClass);
            setTimeout(function () {
                asideMenu.classList.remove(animationOpeningClass);
            }, 1000)
        }
        asideMenu.classList.toggle(openedClass);
    }) 
}