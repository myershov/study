var kuki = [
  'car',
  'apple',
  'mouse',
  'window',
  'black',
  'smart'
];

function isIndexSort(item,index){
  return index % 2
}
console.log(kuki.filter(isIndexSort));