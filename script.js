document.addEventListener('DOMContentLoaded', function() {
    // Review Submission
    const reviewForm = document.getElementById('review-form');
    const reviewsList = document.getElementById('reviews-list');

    if (reviewForm && reviewsList) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('reviewer-name').value.trim();
            const reviewText = document.getElementById('review-text').value.trim();

            if (name && reviewText) {
                const reviewItem = document.createElement('div');
                reviewItem.classList.add('review-item');
                reviewItem.innerHTML = `
                    <div class="review-header">
                        <strong>${name}</strong>
                        <span class="review-date">${new Date().toLocaleDateString()}</span>
                    </div>
                    <p>${reviewText}</p>
                `;
                reviewsList.appendChild(reviewItem);
            }
        });

        // Load existing reviews
        loadReviews();
    }

    // Load existing reviews
    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('pubgReviews') || '[]');

        if (reviews.length === 0) {
            // Add sample reviews if no reviews exist
            const sampleReviews = [
                {
                    name: "Ahmed Khan",
                    text: "Excellent service! Got my 50k UC within minutes. Highly recommend this store. Very professional and quick response on WhatsApp.",
                    date: new Date(Date.now() - 86400000 * 2).toISOString()
                },
                {
                    name: "Sarah Ali",
                    text: "Very fast delivery and great prices. Will definitely buy again! The process was smooth and hassle-free.",
                    date: new Date(Date.now() - 86400000).toISOString()
                },
                {
                    name: "Usman Malik",
                    text: "Trusted seller! I've been buying UC from here for months. Always delivers on time. 5 stars!",
                    date: new Date(Date.now() - 86400000 * 3).toISOString()
                }
            ];
            sampleReviews.forEach(review => {
                reviews.unshift(review);
                localStorage.setItem('pubgReviews', JSON.stringify(reviews));
            });
        }

        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `
                <div class="review-header">
                    <strong>${review.name}</strong>
                    <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p>${review.text}</p>
            `;
            reviewsList.appendChild(reviewItem);
        });
    }

    // Load existing reviews
    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('pubgReviews') || '[]');

        if (reviews.length === 0) {
            // Add sample reviews if no reviews exist
            const sampleReviews = [
                {
                    name: "Ahmed Khan",
                    text: "Excellent service! Got my 50k UC within minutes. Highly recommend this store. Very professional and quick response on WhatsApp.",
                    date: new Date(Date.now() - 86400000 * 2).toISOString()
                },
                {
                    name: "Sarah Ali",
                    text: "Very fast delivery and great prices. Will definitely buy again! The process was smooth and hassle-free.",
                    date: new Date(Date.now() - 86400000).toISOString()
                },
                {
                    name: "Usman Malik",
                    text: "Trusted seller! I've been buying UC from here for months. Always delivers on time. 5 stars!",
                    date: new Date(Date.now() - 86400000 * 3).toISOString()
                }
            ];
            sampleReviews.forEach(review => {
                reviews.unshift(review);
                localStorage.setItem('pubgReviews', JSON.stringify(reviews));
            });
        }

        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `
                <div class="review-header">
                    <strong>${review.name}</strong>
                    <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p>${review.text}</p>
            `;
            reviewsList.appendChild(reviewItem);
            reviews.forEach(review => {
                const reviewItem = document.createElement('div');
                reviewItem.classList.add('review-item');
                reviewItem.innerHTML = `
                    <div class="review-header">
                        <strong>${review.name}</strong>
                        <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                    </div>
                    <p>${review.text}</p>
                </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div>
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
            </div">
        </div>
