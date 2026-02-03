export default function decorate(block) {
  const button = document.createElement('button');
  button.className = 'save-btn';
  button.textContent = 'Save';

  block.innerHTML = '';
  block.append(button);
}
