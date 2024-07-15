const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});


// const reviewsContainer = document.querySelector('.reviews-container');
// const dots = document.querySelectorAll('.dot');
// let currentReviewSet = 0;

// function showReview(index) {
//     const reviewCards = document.querySelectorAll('.review-card');
//     const cardsPerSet = 3;
//     const totalSets = Math.ceil(reviewCards.length / cardsPerSet);

//     if (index >= totalSets) {
//         currentReviewSet = 0;
//     } else if (index < 0) {
//         currentReviewSet = totalSets - 1;
//     } else {
//         currentReviewSet = index;
//     }

//     const offset = currentReviewSet * 100;
//     reviewsContainer.style.transform = `translateX(-${offset}%)`;
//     updateDots();
// }

// function updateDots() {
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[currentReviewSet].classList.add('active');
// }

// document.querySelector('.next').addEventListener('click', () => showReview(currentReviewSet + 1));
// document.querySelector('.prev').addEventListener('click', () => showReview(currentReviewSet - 1));

// showReview(currentReviewSet);


const reviewsContainer = document.querySelector('.reviews-container');
const dots = document.querySelectorAll('.dot');
let currentReviewSet = 0;

function showReview(index) {
    const reviewWrappers = document.querySelectorAll('.review-card-wrapper');
    const cardsPerSet = 3;
    const totalSets = Math.ceil(reviewWrappers.length / cardsPerSet);

    if (index >= totalSets) {
        currentReviewSet = 0;
    } else if (index < 0) {
        currentReviewSet = totalSets - 1;
    } else {
        currentReviewSet = index;
    }

    const offset = currentReviewSet * 100;
    reviewsContainer.style.transform = `translateX(-${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentReviewSet].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => showReview(currentReviewSet + 1));
document.querySelector('.prev').addEventListener('click', () => showReview(currentReviewSet - 1));

showReview(currentReviewSet);
