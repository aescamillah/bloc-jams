function forEach(array, callback) {
    for(var c = 0; c < array.length; c++) {
        callback(array[c]);
    }
}