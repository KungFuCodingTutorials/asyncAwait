let handlers = {};

// Index handler
handlers.index = async function(data){
    let index = {
        'path' : data.path,
        'message' : 'This is the index page'
    }
    return{
        'statusCode' : 200,
        'payload' : index,
    }
}

// 404 handlers
handlers.notFound = async function(data){
    let notFound = {
        'path': data.path,
        'message' : 'This is the 404 page'
    }
    return{
        'statusCode' : 200,
        'payload' : notFound,
    }
}

handlers.products = async function(data){
    let products = {
        'productType' : 'phone',
        'color': 'black',
        'productPrice' : '$500'
    }
    return{
        'statusCode' : 200,
        'payload' : products,
    }
}

module.exports = handlers;

