const btnAdd = document.querySelector('.review-btn');
const productText = document.querySelector('.product-text');
const reviewText = document.querySelector('.review-text');

const allReviews = [];

const reviewsLink = document.querySelector('.reviews-link');
reviewsLink.addEventListener('click', () => {
    window.location.href = "reviews.html";
});

btnAdd.addEventListener('click', () => {
    const newReview = reviewText.value.trim();
    if (newReview !== '') {
        const reviews = JSON.parse(localStorage.getItem(productText.value)) || [];
        reviews.push(newReview);
        localStorage.setItem(productText.value, JSON.stringify(reviews));
        reviewText.value = '';
    }
});
