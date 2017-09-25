
const timeoutConsole = (arr) => {
	const index = 0;

	if (arr.length === 0) return;
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log( arr[0] )
			res( arr.slice(1) );
		}, 500)
	}).then( timeoutConsole );
};


timeoutConsole( [1,2,3,4] ).catch();
