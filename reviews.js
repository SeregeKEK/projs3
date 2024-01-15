const productsList = document.querySelector('.review-list');

const productsLink = document.querySelector('.products-link');
productsLink.addEventListener('click', () => {
    window.location.href = "index.html";
});

const allProduct = [];

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    allProduct.push(key);
};

allProduct.forEach((product) => {
    const productEl = document.createElement('div');
    productEl.innerHTML = `<h3 class="product-name">${product}</h3> <div class="review-container"></div>`;
    productsList.append(productEl);
    productEl.classList.add('review-list__item');
    const revieContainer = productEl.querySelector('.review-container');
    const reviews = JSON.parse(localStorage.getItem(product)) || [];

    reviews.forEach((review) => {
        const reviewEl = document.createElement('p');
        reviewEl.classList.add('review-item');
        reviewEl.innerHTML = `${review} <button class="review-del-btn">Удалить</button>`;
        revieContainer.append(reviewEl);
    });
});

const productLists = document.querySelectorAll('.product-name');
productLists.forEach((list) => {
    const listParent = list.parentNode;
    const listItems = list.nextSibling.nextSibling;
    listItems.classList.add('hidden');

    list.addEventListener('click', () => {
        listItems.classList.toggle('hidden');
    });
});

const reviewDelBtns = document.querySelectorAll('.review-del-btn');
reviewDelBtns.forEach(function (item) {
    item.addEventListener("click", function () {
        const arrayReview = item.parentNode.parentNode.previousSibling.previousSibling.textContent;
        const textReview = item.previousSibling.textContent.trim();
        const reviewDel = JSON.parse(localStorage.getItem(arrayReview));
        const indexDel = reviewDel.indexOf(textReview);
        if (indexDel !== -1) {
            reviewDel.splice(indexDel, 1)
            localStorage.setItem(arrayReview, JSON.stringify(reviewDel));
        }
        item.parentNode.parentNode.removeChild(item.parentNode);
        if (localStorage.getItem(arrayReview) === '[]') {
            localStorage.removeItem(arrayReview);
        }
    });
});


