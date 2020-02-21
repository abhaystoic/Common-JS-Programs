Array.prototype.map = undefined;

if (!Array.prototype.map) {
	Array.prototype.map = function(callback) {
    
    if (this == null) {
    	throw new TypeError('Map called on null');
    }
    
    if (this == undefined) {
    	throw new TypeError('Map called on undefined');
    }
    
    if (typeof(this) != 'function') {
    	throw new TypeError('Callback is not a function');
    }
    
  	let rv = [];
    for(let i=0; i<this.length; i++) {
    	rv.push(callback(this[i]));
    }
    return rv;
  }
}

const arr = [1, 2, 3, 4];
let newArr = arr.map(x=> x*2);
console.log(newArr);