export const fetchProduct = id => (
    $.ajax({
        method: 'GET',
        url: `api/products/${id}`
    })
);

export const fetchProducts = search => {
    return $.ajax({
        method: 'GET',
        url: `api/products`,
        data: { search }
    });
};

export const createProduct = product => {
    return $.ajax({
        method: 'POST',
        url: 'api/products',
        data: product,
        contentType: false,
        processData: false
    });
};

export const updateProduct = product => (
    $.ajax({
        method: 'PATCH',
        url: `api/products/${product.id}`,
        data: { product }
    })
);

export const deleteProduct = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/products/${id}`
    })
);

export const createBid = bid => (
    $.ajax({
        method: 'POST',
        url: 'api/bids',
        data: { bid }
    })
);

export const deleteBid = id => (
    $.ajax({
        method: 'POST',
        url: `api/bids/${id}`
    })
);