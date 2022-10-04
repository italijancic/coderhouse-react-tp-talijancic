const products = [
    {
        'id': 1,
        'title': 'iphone14',
        'price': 1000,
        'stock': 200,
        'img': "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
        'detail': "New iphone",
        'category': 'iPhone'
    },
    {
        'id': 2,
        'title': 'iphone13',
        'price': 890,
        'stock': 500,
        'img': "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654893618122",
        'detail': "Old ipohne",
        'category': 'iPhone'
    },
    {
        'id': 3,
        'title': 'iPadPro',
        'price': 880,
        'stock': 100,
        'img': "https://www.ventasrosario.com.ar/wp-content/uploads/2021/07/apple_ipad-pro-spring21_hero_04202021_big.jpg.large_.jpg",
        'detail': 'Best iPad',
        'category': 'iPad'
    },
    {
        'id': 4,
        'title': 'MacBook Pro',
        'price': 2300,
        'stock': 1476,
        'img': "https://trunet.com.ar/wp-content/uploads/2022/04/hero_intro_endframe__e6khcva4hkeq_large.jpg",
        'detail': 'Best MacBook',
        'category': 'MacBook'
    },
    {
        'id': 5,
        'title': 'MacBook Air M2',
        'price': 1400,
        'stock': 3478,
        'img': "https://sneakerhousearg.com/wp-content/uploads/2022/06/Apple-WWDC22-MacBook-Air-hero-220606.jpg",
        'detail': 'New MacBook Air',
        'category': 'MacBook'
    }
]

export default function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export function getProduct(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(item => {
                return item.id === +id
            })
            if(product) {
                resolve(product)
            } else {
                reject('Product not found')
            }
        }, 500)
    })
}

export function getPoductsByCategory(category) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const categoryItems = products.filter(item => {
                return item.category === category
            })
            if (categoryItems.length > 0) {
                resolve(categoryItems)
            } else {
                reject('Category not found')
            }
        }, 500)
    })
}