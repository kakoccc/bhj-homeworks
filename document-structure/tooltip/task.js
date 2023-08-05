const btn = document.querySelectorAll('.has-tooltip')
const tooltipActive = document.createElement('div');



btn.forEach((e) => {
    e.addEventListener('click', (el) => {
        el.preventDefault();
        tooltipActive.classList.add('tooltip');
        tooltipActive.classList.toggle('tooltip_active');
        tooltipActive.textContent = e.getAttribute('title');
        e.appendChild(tooltipActive);
        
    

        let position = e.getBoundingClientRect();
        
        tooltipActive.style.left = position.left + 'px';
        tooltipActive.style.top = position.top12 + 'px';

        tooltipActive.style.position = 'absolute'
    })
})