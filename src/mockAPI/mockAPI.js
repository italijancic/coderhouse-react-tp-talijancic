export const products = [
    {
        'id': 1,
        'title': 'iphone14',
        'price': 1000,
        'stock': 200,
        'img': "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
        'highlight': 'Nuestro nuevo teléfono, más poderoso que nunca.',
        'brief': 'Mayor autonomía que nunca, pantalla más grande y la mejor cámara jamás colocada en un teléfono, hacen del iPhone 14, siemplemente el mejor teléfono.',
        'category': 'iPhone',
        'new': true,
    },
    {
        'id': 2,
        'title': 'iphone13',
        'price': 890,
        'stock': 500,
        'img': "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654893618122",
        'highlight': 'Un telefóno potente y para todos los estilos',
        'brief': 'La combinación de su poderoso procesador, tanto en la presentación normal como en la pro, así como su excelente autonomía y cámara de fotos, hacen del iPhone 13 una excelente elección para todos los gustos y usos.',
        'category': 'iPhone',
        'new': false,
    },
    {
        'id': 3,
        'title': 'MacBook Pro 14"',
        'price': 2300,
        'stock': 1476,
        'img': "https://trunet.com.ar/wp-content/uploads/2022/04/hero_intro_endframe__e6khcva4hkeq_large.jpg",
        'highlight': 'La MacBook más potente jamás creada',
        'brief': 'Lleva tu productividad a otro límite con la nueva MacBook pro de 14". La potencia y autonomía del procesadore M1 Pro, te permitiran trabajar de una manera completamente diferente.',
        'category': 'MacBook',
        'new': false,
    },
    {
        'id': 4,
        'title': 'MacBook Air M2',
        'price': 1400,
        'stock': 3478,
        'img': "https://cdn.shopify.com/s/files/1/1706/9177/products/macbook-air-m2-midnight-custom-mac-bd_b82010cb-9405-4654-a165-9576a249e4e0.jpg?v=1655616307",
        'highlight': 'La MacBook más potente y portátil jamás creada',
        'brief': 'Explora una nueva definición de movilidad con esta nueva Air. Sin resignar potencia, gracias a su poderoso y renovado procesador M2',
        'category': 'MacBook',
        'new': true,
    },
    {
        'id': 5,
        'title': 'MacBook Pro 13" M2',
        'price': 1400,
        'stock': 1658,
        'img': "https://media.ldlc.com/r1600/ld/products/00/05/95/97/LD0005959735.jpg",
        'highlight': 'La MacBook de siempre con el procesador del futuro',
        'brief': 'Redescrubre la MacBook Pro de 13" con este nuevo y poderoso procesador M2. Todo lo que una MacBook Pro te podía dar y más.',
        'category': 'MacBook',
        'new': true,
    },
    {
        'id': 6,
        'title': 'iPadPro',
        'price': 880,
        'stock': 100,
        'img': "https://www.ventasrosario.com.ar/wp-content/uploads/2021/07/apple_ipad-pro-spring21_hero_04202021_big.jpg.large_.jpg",
        'highlight': 'El iPad más potente jamás creado ahora con display XDR',
        'brief': 'Portabilidad y potencia en un solo producto. Descubre una nueva manera de trabajar en términos de potencia y movilidad. Con su pantalla XDR es la opción ideal para diseñadores y creativos',
        'category': 'iPad',
        'new': false,
    },
    {
        'id': 7,
        'title': 'iPad',
        'price': 340,
        'stock': 476,
        'img': "https://www.macstation.com.ar/img/productos/2569-1.jpg",
        'highlight': 'El iPad de siempre con la tecnología de hoy',
        'brief': 'Encuentra en este producto tu compañero ideal para todos los días. Ya sea en el trabajo, el estudio o en casa.',
        'category': 'iPad',
        'new': false,
    },
    {
        'id': 8,
        'title': 'iPad Air',
        'price': 600,
        'stock': 967,
        'img': "https://static.k-tuin.com/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/i/p/ipad-air-m1-azul-5g-64.jpg",
        'highlight': 'El iPad más portatil y potente que podías pedir',
        'brief': 'Coon su poderoso procesador M1 y su pantalla de 10.9" lleva la creatividad y la productividad a donde sea que vayas sin resignar comodidad. El iPad Air es la opción ideal para quienes buscan una pantalla más grande sin la potencia del iPad Pro.',
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