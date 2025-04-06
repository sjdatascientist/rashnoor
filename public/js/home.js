// window.addEventListener('DOMContentLoaded', () => {
//     const container = document.querySelector('.photo-gallery-container');
//     container.scrollLeft = 0.25;

//     // Scroll to X% of the total scrollable width
//   const maxScrollLeft = container.scrollWidth - container.clientWidth;
//   container.scrollLeft = maxScrollLeft * scrollPercentage;
// });

$('#PhotoGallerySection .view-more-btn').click(function(e) {
    window.location.href = "/photogallery";
})