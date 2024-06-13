const doAddProduct = (product) => {
  return { type: "ADD", payload: product };
};

const doRemoveProduct = (serialNo) => {
  return { type: "REMOVE", payload: serialNo };
};

const doRemoveMovie = (serialNo) => {
  return { type: "REMOVE", payload: serialNo };
};

const doAddMovie = (movie) => {
  return { type: "ADD", payload: movie };
};

export { doAddProduct, doRemoveProduct, doRemoveMovie, doAddMovie };
