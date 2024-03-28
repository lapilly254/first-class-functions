function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction(){
    return function named() {
        console.log(Lapilly)
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(Nameless)
    }
}
