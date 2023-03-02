const cart = [];

function log(msg) {
    console.log(msg + msg);
}

function addToCart(item) {
    cart.push(item);
    log("added: " + item);
}

function removeFromCart(idx) {
    cart.splice(idx, 1);
    log("removed: ", idx);
}

addToCart('Waterproof Boots');