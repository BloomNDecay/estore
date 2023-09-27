const products = [
    {
        title: 'Throw Pillows',
        bio: 'Add a splash of fun with our cozy throw pillows! Perfect for any mood and every couch!'
    },
    {
        title: 'Candles and Holders',
        bio: 'Illuminate your world, one scent at a time. Perfect for dinners or just "because" moments!'
    },
    {
        title: 'Framed Art and Posters',
        bio: 'Bare walls are boring! Jazz up your space with our curated artsy collection. Who needs a museum trip?'
    },
    {
        title: 'Indoor Plants',
        bio: 'Bring nature indoors! Our plants promise not to judge your Netflix choices.'
    },
    {
        title: 'Decorative Vases and Bowls',
        bio: 'Why be plain when you can be decorative? Perfect for showing off or just for yourself!'
    },
    {
        title: 'Wall Decals',
        bio: 'Change your wall\'s story without the commitment. It’s decor that doesn’t cling (except to the wall).'
    },
    {
        title: 'String Lights',
        bio: 'Twinkle twinkle little...room? Add a touch of magic with lights that don’t require a genie!'
    },
    {
        title: 'Mirrors',
        bio: 'Reflect your awesomeness (and also check your hair) with our stylish mirror collection!'
    },
    {
        title: 'Shelf Brackets',
        bio: 'Because even your books need a chic place to chill. Elevate your storage game!'
    },
    {
        title: 'Area Rugs',
        bio: 'Why walk on boring floors? Add a touch of luxe underfoot. Warning: Feet may get too comfortable.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');

    products.forEach((product, index) => {
        const productElement = document.createElement('article');
        productElement.classList.add('product');
        productElement.setAttribute('data-id', index);

        const productImage = document.createElement('img');
        productImage.src = `path/to/image/${product.title.replace(/\s/g, '').toLowerCase()}.jpg`;
        productImage.alt = product.title;

        const productTitle = document.createElement('h2');
        productTitle.innerText = product.title;

        const productButton = document.createElement('button');
        productButton.classList.add('btn-details');
        productButton.innerText = 'See Details';
        productButton.addEventListener('click', () => showBio(index));

        productElement.appendChild(productImage);
        productElement.appendChild(productTitle);
        productElement.appendChild(productButton);

        productsContainer.appendChild(productElement);
    });
});

function showBio(productId) {
    const product = products[productId];
    document.getElementById('bio-title').innerText = product.title;
    document.getElementById('bio-text').innerText = product.bio;
    document.getElementById('bio').style.display = 'flex';
}

function hideBio() {
    document.getElementById('bio').style.display = 'none';
}
