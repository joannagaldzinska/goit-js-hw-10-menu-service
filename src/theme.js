const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const body = document.querySelector('body');

  const themeSwitch = document.querySelector('#theme-switch-toggle');

 
  themeSwitch.addEventListener('change', () => {
    if (body.className === 'light-theme' || body.className === ''){
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
        localStorage.setItem('theme', 'dark-theme')
    }

    else if (body.className === 'dark-theme'){
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        localStorage.setItem('theme', 'light-theme')
    }
      }
    )

    const start = localStorage.getItem('theme');
    if (start === 'dark-theme') {
        themeSwitch.checked = true;
        body.classList.add('dark-theme')
    }