import menuTpl from './templates/menu-template.hbs';
import menu from './data/menu.json';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('.js-menu'),
  body: document.body,
  checkBox : document.querySelector('.theme-switch__toggle'),
}

refs.menuList.insertAdjacentHTML('beforeend', menuTpl(menu));

const persistStateTheme = localStorage.getItem('theme-state');

if (persistStateTheme !== null) {
  if (persistStateTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.checkBox.checked = true;
  }
} else {
  refs.body.classList.add(Theme.LIGHT);
    refs.checkBox.checked = false;
}

refs.checkBox.addEventListener('change', (e) => {
  if (e.target.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme-state', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme-state', Theme.LIGHT);
  }

})
