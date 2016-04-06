/**
 * 
 *
 * 
 */

/* known inputs */
params = {
	avgWeight: null,
	baseWeight: null,
	price: null,
	adjAmount: null,
	weightDiff: null,
	totalNetWeight: null,
	measure: 'lbs.'
}

// slide model
var Slide = function (data) {  
    this.data = data;
}

Slide.prototype.data = {}

Slide.prototype.log = function () {
  console.log('buz!');
};

Slide.prototype.get = function (name) {  
    return this.data[name];
}

Slide.prototype.set = function (name, value) {  
    this.data[name] = value;
}

// exports an anonymous object
module.exports = new Slide();
// exports a named object
//exports.Slide = new Slide();