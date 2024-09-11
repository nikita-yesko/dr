import $ from 'jquery'
const Script = () => {
    function calculateHeroWithMapSize() {
        if (document.querySelector('.hero--map')) {
            const hero = document.querySelector('.hero--map');
            const map = document.querySelector('.hero--map .map');
            const height = map.clientHeight;
            hero.style.height = height+'px';
        }
    }
    window.addEventListener('resize', calculateHeroWithMapSize);
    calculateHeroWithMapSize();

    function addMenuPadding() {
        window.onscroll = function() {
            let height = document.querySelector(".header__inner").offsetHeight;
            if (window.screen.width < 1024) {
                document.querySelector("main").style.paddingTop = height + "px";
            }
        }
    }
    addMenuPadding();
    window.dispatchEvent(new CustomEvent('scroll'))


   const handleCustomSelect = () => {
    const selects = document.querySelectorAll('.custom-select');
    selects.forEach(select => {
        const input = select.querySelector('input');
        const selectHead = select.querySelector('.select-head');
        const selectList = select.querySelector('.select-items');
        selectHead.addEventListener('click', function(e){
            e.target.classList.toggle('open');
            selectList.classList.toggle('active');
        });
        selectList.addEventListener('click', function(e) {
            if (e.target.closest('.select-item')) {
                const currentSelect = e.target;
                input.value = currentSelect.dataset.value;
                selectHead.classList.remove('open');
                selectList.classList.remove('active');
                selectHead.textContent = currentSelect.textContent;
            }
        });
    });
    document.addEventListener('click', function(e) {
        selects.forEach(select => {
            const selectHead = select.querySelector('.select-head');
            const selectList = select.querySelector('.select-items');
            if (!e.target.closest('.custom-select')) {
                selectHead.classList.remove('open');
                selectList.classList.remove('active');
            }
        });
    });
   }
   handleCustomSelect();
}
export default Script;