'use strict';
var arr = [4,3,'two','one'];

const displayValue = (value) => {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log('value is', value);
			resolve();
		}, 1000);
	});
};

const start = (arr) => {
	var index = 0;
	const goOn = () => {
		if (index < arr.length)
			return displayValue( arr[index++] ).then( goOn );
	};
	return goOn(0)
}

start(arr).then( () => { console.log('done') } );
