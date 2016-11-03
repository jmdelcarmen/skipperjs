var skip = (str, shift) => {
  if (typeof str !== `string`) {
    try {
      throw new Error(`must pass a string.`);
    } catch (err) {
      console.log(`${err.name}: ${err.message}`);
    }
  }
  else {
    let pad = ``;
    let counter = 0
    while (shift > counter) {
      pad += `  `;
      counter++;
    }
    return pad + str;
  }
}

module.exports.skip = skip;
