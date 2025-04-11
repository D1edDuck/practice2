const $circles = document.querySelectorAll('.circle');
const $next = document.getElementById('next');
const $prev = document.getElementById('prev');
const $color_bar = document.querySelector('.color_bar');

let currentActive = 1;
let circleSize = 40;

$next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > $circles.length) {
        currentActive = $circles.length;
    }
    console.log(currentActive);
    update()
})

$prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    console.log(currentActive);

    update()
})

function update () {
    $circles.forEach((item,idx) => {
        if (idx < currentActive) {
            item.classList.add('active');
            if (currentActive === idx+1) {
                item.classList.add('zoom');
            }
        } else {
            item.classList.remove('active');
        }
    })

    const active = document.querySelectorAll('.active');
    console.log(active);

    $color_bar.style.width = (active.length - 1) / ($circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        $prev.disabled = true;
    } else if (currentActive === $circles.length) {
        $next.disabled = true;
    } else {
        $next.disabled = false;
        $prev.disabled = false;
    }



    setTimeout(() => {
        $circles.forEach((item,idx) => {
            item.classList.remove('zoom');
        })
    }, 300)
}