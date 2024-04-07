const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active')
        const accordionDescricao = this.nextElementSibling

        const plusIcon = this.querySelector('.plus-icon')

        const minusIcon = this.querySelector('.minus-icon')

        if(accordionDescricao.style.maxHeight) {
            accordionDescricao.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            accordionDescricao.style.maxHeight = accordionDescricao.scrollHeight + 'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        };
    }); 
});