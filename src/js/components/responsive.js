import { ClientJS } from 'clientjs';


const client = new ClientJS();

const ResponsiveBackgroundHandler = () => {
    const isMobile = client.isMobile();
    const background = document.querySelector('.responsive-backgound-url');
    if (!!background) {
        if (isMobile) {
            background.style.background = `url(${background.dataset.bgMobile}) no-repeat center/cover`;
        } else {
            background.style.background = `url(${background.dataset.bgDesktop}) no-repeat center/cover`;
        }
    }
}

export default ResponsiveBackgroundHandler;
