export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
    let p = []
  for (let index = 0; index < totalPages; index++) {
    p.push(index + 1);
  }
  return p
};
