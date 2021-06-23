if(localStorage.getItem('theme') === "dark") {
	document.body.classList.toggle(localStorage.getItem('theme'));
}

const themeSwitcher = document.getElementById('theme-switcher');

themeSwitcher.addEventListener('click', function() {
	document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList);
})