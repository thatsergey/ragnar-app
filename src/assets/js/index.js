import '../styles/reset.scss'
import '../styles/mixins.scss'
import '../styles/styles.scss'

const classes = {
    opened: 'opened'
}

const menuLink = document.querySelectorAll('.menu-link')
const header = document.querySelector('.header')
const menuButton = document.querySelector('.header-menu__button');

    const toggleMenu = ()=> header.classList.toggle(classes.opened)
    const scrollToSection = (e)=>{

        e.preventDefault();
        console.log(e)
        const href = e.currentTarget.getAttribute('href')
        console.log(href);
        if(!href) return;
        const section = href.slice(1);
        console.log(section)
        const top = document.getElementById(section)?.offsetTop || 0;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }
    const formatVslue = (value) => value < 10 ? `0${value}`: value
    
const getTimer = (diff)=>{
    return{
        seconds: (diff / 1000) % 60,
        minutes: (diff / (1000 * 60)) % 60,
        hours: (diff / (1000 * 60 * 60)) % 24,
        days: (diff / (1000 * 60 * 60 *24)) % 30,
        month: (diff / (1000 * 60 * 60 *24* 30)) % 12,
    }
}

const setTimerValues = (values)=>{
    Object.entries(values).forEach(([key,value])=>{
        const timerValue = document.getElementById(key)
        timerValue.innerText = formatVslue(Math.floor(value))
    })
}

const startTimer = (date) => {
    const id = setInterval(() => {
        const diff = new Date(date).getTime() - new Date().getTime()
        if(diff<0){
            clearInterval(id)
        }
        setTimerValues(getTimer(diff))
    }, 1000);    
}
startTimer('Jule 11, 2023 00:00:00')
menuButton.addEventListener('click',toggleMenu)
menuLink.forEach((link)=> link.addEventListener('click', scrollToSection))