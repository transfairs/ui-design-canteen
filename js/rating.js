document.querySelectorAll('.rating').forEach(rating => {
  const stars = rating.querySelectorAll('.stars span');
  let selected = parseInt(rating.dataset.selected || 0, 10);

  const highlight = count => {
    stars.forEach((s, i) => {
      s.classList.toggle('hovered', i < count);
    });
  };

  const select = count => {
    stars.forEach((s, i) => {
      s.classList.toggle('selected', i < count);
    });
    rating.dataset.selected = count;
  };

  stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => highlight(index + 1));
    star.addEventListener('mouseout', () => highlight(0));
    star.addEventListener('click', () => select(index + 1));
  });

  select(selected);
});
