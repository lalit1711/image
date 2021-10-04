export const deBouncingFunction = function (func, delay) {
	let timer;
	return function (...args) {
		const context = this;
		clearInterval(timer);
		timer = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	};
};
