// For demo: open forms/cart (can be replaced by real modals)
function openOptForm() {
    window.scrollTo(0, document.body.scrollHeight);
    alert('Wholesale request form is below. Please fill and submit.');
}
function openRetailCart() {
    document.getElementById('productList').scrollIntoView({behavior: "smooth"});
    alert('For retail, select your product and click Buy Retail.');
}

// Bind buttons (in case new products/cards are added dynamically)
document.addEventListener('DOMContentLoaded', function() {
    let optBtns = document.querySelectorAll('.btn-opt');
    optBtns.forEach(btn => {
        btn.addEventListener('click', openOptForm);
    });
    let retailBtns = document.querySelectorAll('.btn-retail');
    retailBtns.forEach(btn => {
        btn.addEventListener('click', openRetailCart);
    });
});