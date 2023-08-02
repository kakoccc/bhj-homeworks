const btn = document.querySelectorAll('.font-size') // кнопки
btn.forEach((e) => {
    e.addEventListener('click', (el) => {
        el.preventDefault();
        const book = document.querySelector('.book');
        btn.forEach(e => e.classList.remove('font-size_active'));
        e.classList.add('font-size_active');
        if (e.classList.contains('font-size_small')){
            book.classList.add('book_fs-small');
        } else if (e.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small','book_fs-big');
        }
    })
})


