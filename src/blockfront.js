import './blockfront.scss';

document.addEventListener("DOMContentLoaded", front);
function front() {
    let wrap = document.querySelector('.wp-block-post-content');
    let myuser = document.querySelector('.user');

    wrap.addEventListener('click', e => {
            let parent = e.target.closest('.user');
            parent.querySelector('.user-modal').classList.add('popup');
        if(e.target.className === 'card__close') {
            e.target.closest('.user-modal').classList.remove('popup');
        }
    });
}
