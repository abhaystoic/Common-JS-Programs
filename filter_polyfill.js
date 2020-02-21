Array.prototype.filter = undefined;

if (!Array.prototype.filter) {
	Array.prototype.filter = function(callback) {
  	if (this == null) {
    	throw new TypeError('Map called on null');
    }
    
    if (this == undefined) {
    	throw new TypeError('Map called on undefined');
    }
    
    if (typeof(this) != 'function') {
    	throw new TypeError('Callback is not a function');
    }
  	let arr = [];
  	for(let x of this) {
    	if (callback(x)) {
      	arr.push(x);
      }
    }
    return arr;
  }
}

const arr = [1, 2, 3, 4];
newArr = arr.filter((x) => {return x===2});
console.log(newArr);
