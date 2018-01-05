calcLogic = {
	add: function(arg1, arg2, lastResult) {
		var result = null;
		if (arg1 && arg2) {
			result = arg1 + arg2;
		} else if (arg1) {
			result = lastResult + arg1;
		} else {
			result = lastResult + arg2;
		}
		return result;
	},

	subtract: function(arg1, arg2, lastResult) {
		var result = null;
		if (arg1 && arg2) {
			result = arg1 - arg2;
		} else if (arg1) {
			result = lastResult - arg1;
		} else {
			result = lastResult - arg2;
		}
		return result;
	},

	multiply: function(arg1, arg2, lastResult) {
		var result = null;
		if (arg1 && arg2) {
			result = arg1 * arg2;
		} else if (arg1) {
			result = lastResult * arg1;
		} else {
			result = lastResult * arg2;
		}
		return result;
	},

	divide: function(arg1, arg2, lastResult) {
		var result = null;
		if (arg1 && arg2) {
			result = arg1 / arg2;
		} else if (arg1) {
			result = lastResult / arg1; 
		} else {
			result = lastResult /arg2;
		}
		return result;
	}
};