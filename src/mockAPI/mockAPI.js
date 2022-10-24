export const products = [
    {
        'id': 1,
        'title': 'iphone14',
        'price': 1000,
        'stock': 200,
        'img': "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
        'detail': "New iphone",
        'category': 'iPhone',
        'new': true,
    },
    {
        'id': 2,
        'title': 'iphone13',
        'price': 890,
        'stock': 500,
        'img': "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654893618122",
        'detail': "Old ipohne",
        'category': 'iPhone',
        'new': false,
    },
    {
        'id': 3,
        'title': 'MacBook Pro',
        'price': 2300,
        'stock': 1476,
        'img': "https://trunet.com.ar/wp-content/uploads/2022/04/hero_intro_endframe__e6khcva4hkeq_large.jpg",
        'detail': 'Best MacBook',
        'category': 'MacBook',
        'new': false,
    },
    {
        'id': 4,
        'title': 'MacBook Air M2',
        'price': 1400,
        'stock': 3478,
        'img': "https://cdn.shopify.com/s/files/1/1706/9177/products/macbook-air-m2-midnight-custom-mac-bd_b82010cb-9405-4654-a165-9576a249e4e0.jpg?v=1655616307",
        'detail': 'New MacBook Air',
        'category': 'MacBook',
        'new': true,
    },
    {
        'id': 5,
        'title': 'MacBook Pro M2',
        'price': 1400,
        'stock': 1658,
        'img': "https://media.ldlc.com/r1600/ld/products/00/05/95/97/LD0005959735.jpg",
        'detail': 'New MacBook Pro 13"',
        'category': 'MacBook',
        'new': true,
    },
    {
        'id': 6,
        'title': 'iPadPro',
        'price': 880,
        'stock': 100,
        'img': "https://www.ventasrosario.com.ar/wp-content/uploads/2021/07/apple_ipad-pro-spring21_hero_04202021_big.jpg.large_.jpg",
        'detail': 'Best iPad',
        'category': 'iPad',
        'new': false,
    },
    {
        'id': 7,
        'title': 'iPad',
        'price': 340,
        'stock': 476,
        'img': "https://www.macstation.com.ar/img/productos/2569-1.jpg",
        'detail': 'El iPad de siempre con la tecnología de hoy',
        'category': 'iPad',
        'new': false,
    },
    {
        'id': 8,
        'title': 'iPad Air',
        'price': 600,
        'stock': 967,
        'img': "https://static.k-tuin.com/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/i/p/ipad-air-m1-azul-5g-64.jpg",
        'detail': 'El iPad más portatil jamás creado',
        'category': 'iPad',
        'new': false,
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
                reject( new Error('Product not found'))
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
                reject(new Error('Category not found'))
            }
        }, 500)
    })
}