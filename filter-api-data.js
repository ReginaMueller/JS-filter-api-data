function filterApiData(apiData, mandatoryKeys) {
  let result = [];
  for (let obj of apiData) {
    let allKeys = true;
    for (let key of mandatoryKeys) {
      allKeys = allKeys && obj.hasOwnProperty(key);
    }
    if (allKeys) result.push(obj);
  }
  return result;
}
