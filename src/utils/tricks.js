export const vhToPixel = value => `${(window.innerHeight * value) / 100}px`;
export const vwToPixel = value => `${(window.innerWidth * value) / 100}px`;
export const randomColor = value =>
  `#${Math.floor(Math.abs(Math.sin(value) * 16777215) % 16777215).toString(
    16
  )}`;
export default { vhToPixel, vwToPixel, randomColor };
