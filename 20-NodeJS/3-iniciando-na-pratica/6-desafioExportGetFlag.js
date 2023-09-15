function getFlagValue(flag){
  const index = process.argv.indexOf(flag);
  console.log(index)
  return (index !== -1)?process.argv[index+1]:"";
}

module.exports = getFlagValue;