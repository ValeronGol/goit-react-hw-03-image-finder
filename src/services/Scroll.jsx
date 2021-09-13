export const Scroll = () => {
  return window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};
