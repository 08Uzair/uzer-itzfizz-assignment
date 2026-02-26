export const calculateFinalX = (containerWidth, carWidth, padding = 40) => {
  return containerWidth - carWidth - padding;
};