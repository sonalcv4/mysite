// import { createOptimizedPicture } from '../../scripts/aem.js';

// export default function decorate(block) {

//   const ul = document.createElement('ul');

//   [...block.children].forEach((row) => {

//     // EACH COLUMN becomes a card
//     [...row.children].forEach((col) => {

//       const li = document.createElement('li');

//       const pic = col.querySelector('picture');
//       if (pic) {
//         pic.classList.add('cat-card-image');
//         li.append(pic);
//       }

//       ul.append(li);
//     });

//   });

//   // Optimize images (same as cards block)
//   ul.querySelectorAll('picture > img').forEach((img) => {
//     img.closest('picture').replaceWith(
//       createOptimizedPicture(img.src, img.alt || '', false, [{ width: '750' }])
//     );
//   });

//   block.replaceChildren(ul);
// }


import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * @param {Element} block The cat block element
 */
export default function decorate(block) {
  // Find all images in the block
  const images = [...block.querySelectorAll('img')];
  
  // Clear the block's initial table-like structure
  block.textContent = '';

  // Create a container for the horizontal grid
  const container = document.createElement('div');
  container.classList.add('cat-grid-container');

  images.forEach((img) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('cat-image-wrapper');
    
    // Use the optimized picture utility from your reference
    const picture = createOptimizedPicture(img.src, img.alt || 'Cat image', false, [{ width: '750' }]);
    
    wrapper.append(picture);
    container.append(wrapper);
  });

  block.append(container);
}