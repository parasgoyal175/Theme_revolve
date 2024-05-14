// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colourPalette = document.querySelectorAll('.choose-colour span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

//notification
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display ='none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// Messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--colour-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// Theme Customization
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

// change font size
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})

const changeActiveColourClass = () => {
    colourPalette.forEach(colourPicker => {
        colourPicker.classList.remove('active');
    })
}

// change primary colours
colourPalette.forEach(colour => {

    colour.addEventListener('click', () => {
        let primary;
        changeActiveColourClass();

        if(colour.classList.contains('colour-1')){
            primaryHue = 252;
        } else if(colour.classList.contains('colour-2')) {
            primaryHue = 52;
        } else if(colour.classList.contains('colour-3')) {
            primaryHue = 352;
        } else if(colour.classList.contains('colour-4')) {
            primaryHue = 152;
        } else if(colour.classList.contains('colour-5')) {
            primaryHue = 202;
        }
        colour.classList.add('active');

        root.style.setProperty('--primary-colour-hue', primaryHue);
    })
})

// changing theme backgorund
let lightColourLightness;
let whiteColourLightness;
let darkColourLightness;

// change background colour
const changeBG = () => {
    root.style.setProperty('--light-colour-lightness', lightColourLightness);
    root.style.setProperty('--white-colour-lightness', whiteColourLightness);
    root.style.setProperty('--dark-colour-lightness', darkColourLightness);
}

bg1.addEventListener('click', () => {
    bg1.classList.add('active');
   
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
})

bg2.addEventListener('click', () => {
    darkColourLightness = '95%';
    whiteColourLightness = '20%';
    lightColourLightness = '15%';

    bg2.classList.add('active');

    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColourLightness = '95%';
    whiteColourLightness = '10%';
    lightColourLightness = '0%';

    bg3.classList.add('active');

    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})