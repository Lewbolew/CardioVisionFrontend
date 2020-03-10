export const preprocessData = data => {
  data = data.LCX;
    // parse to int mpr_index
  data = data
    .map(el => {
      el.mpr_index = parseInt(el.mpr_index);
      return el;
    })
    .sort((o1, o2) => {
      return o1.mpr_index < o2.mpr_index
        ? -1
        : o1.mpr_index > o2.mpr_index
        ? 1
        : 0;
    });
  // construct object of array instead of array pf objects
  let dataArrays = {};
  const keys = Object.keys(data[0]);
  keys.forEach(key => (dataArrays[key] = data.map(el => el[key])));
  // transpose probabilities matrix
  dataArrays.prediction_probas = dataArrays.prediction_probas[0].map((col, i) =>
    dataArrays.prediction_probas.map(row => row[i])
  );
  return dataArrays;
};
