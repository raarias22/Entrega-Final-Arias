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
    {id: '2', name:'Guitarra Fender Telecaster', price:'2500.00', category:'Guitarras', img:'https://cdnx.jumpseller.com/sagas-music-shop/image/31684677/resize/1200/1200?1675915953', stock:15, description:'Guitarra Fender Telecaster clásica'},
    {id: '3', name:'Bajo Fender', price:'2000.00', category:'Bajos', img:'https://overdrive.cl/wp-content/uploads/2022/06/Spector-Performer-4-Metallic-Blue-Gloss-PERF4MBL-zoom.jpg', stock:20, description:'Bajo Fender eléctrico 4 cuerdas'},
    {id: '4', name:'Bajo Yamaha', price:'2000.00', category:'Bajos', img:'https://www.cedem.info/item/images/eDfqwtNN9d.jpg', stock:25, description:'Bajo Yamaha eléctrico 5 cuerdas'},
    {id: '5', name:'Bajo Yamaha', price:'8000.00', category:'Baterias', img:'https://cdnx.jumpseller.com/guitarstore/image/11399351/resize/1200/1200?1647346105', stock:8, description:'Bateria eléctrica'},
    {id: '6', name:'Bajo Yamaha', price:'20000.00', category:'Baterias', img:'https://cdnx.jumpseller.com/mercurymusic/image/33018931/resize/1200/1200?1679694504', stock:10, description:'Bateria acústica Apollo'},
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

export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))

        }, 500)

    })

};
