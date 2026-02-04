import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {

  const ul = document.createElement('ul');

  // Loop through rows
  [...block.children].forEach((row) => {

    // Loop through each column
    [...row.children].forEach((col) => {

      const li = document.createElement('li');

      const picture = col.querySelector('picture');

      if (picture) {
        picture.classList.add('cat-card-image');
        li.append(picture);
        ul.append(li);
      }

    });

  });

  // Optimize images (same as cards block)
  ul.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])
    );
  });

  block.textContent = '';
  block.append(ul);
}
