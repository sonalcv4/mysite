import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');

    // Move all columns (images) into li
    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }

    // Mark image containers
    [...li.children].forEach((div) => {
      if (div.querySelector('picture')) {
        div.className = 'cat-card-image';
      }
    });

    ul.append(li);
  });

  // Optimize images (same as cards)
  ul.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt || '', false, [
        { width: '750' },
      ])
    );
  });

  block.replaceChildren(ul);
}
