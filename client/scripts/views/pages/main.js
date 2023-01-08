import Component from '../../views/component.js';

class Main extends Component {
    static async render() {
        return `
        <div class="main-container">
            <div class="flex-wrapper">
                <div class="slider-wrapper">
                    <div class="slide active"></div>
                    <div class="slide"></div>
                    <div class="slide"></div>
                    <div class="slide"></div>
                    <div class="slide"></div>
                    <div id="btn-prev"></div>
                    <div id="btn-next"></div>
                </div>
            </div>
            <div class="dots-wrapper">
                <div class="dot active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="app">
                <p>Download App</p>
                <div class="qr">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        `;
    }

    static afterRender() {
        this.carousel();
    }

    static carousel() {
        const prev = document.getElementById('btn-prev'),
            next = document.getElementById('btn-next'),
            slides = document.querySelectorAll('.slide'),
            dots = document.querySelectorAll('.dot');

        let index = 0;

        const activeSlide = n => {
            for(let slide of slides) {
                slide.classList.remove('active');
            }
            slides[n].classList.add('active');
        }

        const activeDot = n => {
            for(let dot of dots) {
                dot.classList.remove('active');
            }
            dots[n].classList.add('active');
        }

        const prepareCurrentSlide = ind => {
            activeSlide(ind);
            activeDot(ind);
        }

        const nextSlide = () => {
            if (index === slides.length - 1) {
                index = 0;
                prepareCurrentSlide(index);
            } else {
                index++;
                prepareCurrentSlide(index);
            }
        }

        const prevSlide = () => {
            if (index === 0) {
                index = slides.length - 1;
                prepareCurrentSlide(index);
            } else {
                index--;
                prepareCurrentSlide(index);
            }
        }

        dots.forEach((item, indexDot) => {
            item.addEventListener('click', () => {
                index = indexDot;
                prepareCurrentSlide(index);
            })
        })

        next.addEventListener('click', nextSlide);
        prev.addEventListener('click', prevSlide);
        setInterval(nextSlide, 6000);
    }
}

export default Main;