const products = [
    {
        id: '1',
        name: 'Guitarra Fender Stratocaster',
        price: '2200.00',
        category: 'Guitarras',
        img:'https://overdrive.cl/wp-content/uploads/2022/11/Mooer-GTRS-Professional-P800-Intelligent-Guitar-Olympic-White-body.jpg',
        stock: 25,
        description:'Guitarra Fender Stratocaster blanca'

    },
    {id: '2', name:'Guitarra Fender Telecaster', price:'2500.00', category:'Guitarras', img:'https://cdnx.jumpseller.com/sagas-music-shop/image/31684677/resize/1200/1200?1675915953', stock:20, description:'Guitarra Fender Telecaster clásica'},
    {id: '3', name:'Bajo Fender', price:'2000.00', category:'Bajos', img:'https://overdrive.cl/wp-content/uploads/2022/06/Spector-Performer-4-Metallic-Blue-Gloss-PERF4MBL-zoom.jpg', stock:20, description:'Bajo Fender eléctrico 4 cuerdas'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })     
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}
