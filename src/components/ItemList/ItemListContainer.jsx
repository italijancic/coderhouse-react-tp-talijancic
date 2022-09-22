import React from 'react'
import Card from '../Card/Card'
import iPhone14 from '../Card/img/iphone14.jpg'
import iPhone13 from '../Card/img/iphone13.png'
import iPadPro from '../Card/img/ipadPro.jpeg'
import macBookPro from '../Card/img/macbookPro.jpeg'
import macBookAir from '../Card/img/macBookAirM2.webp'

export default function ItemListContainer(props) {

  const products = [
    {
      'id': 1,
      'title': 'iphone14',
      'price': 1000,
      'img': iPhone14
    },
    {
      'id': 2,
      'title': 'iphone13',
      'price': 890,
      'img': iPhone13
    },
    {
      'id': 3,
      'title': 'iPadPro',
      'price': 880,
      'img': iPadPro
    },
    {
      'id': 4,
      'title': 'MacBook Pro',
      'price': 2300,
      'img': macBookPro
    },
    {
      'id': 5,
      'title': 'MacBook Air M2',
      'price': 1400,
      'img': macBookAir
    }
  ]

  return (
    <div className='' id=''>
      <h1>{props.greeting}</h1>

        {products.map( (product) => {
          return (
            <Card
              key = {product.id}
              title={product.title}
              price={product.price}
              imgUrl={product.img}
            />
          )
        })}

        {/* <Card
          title='UX/UI'
          detail='Lorem impsun'
          price='100'
          imgUrl={iPhone14}
        />
        <Card
          title='React.js'
          detail='Lorem impsun'
          price='150'
          imgUrl='https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png'
        />
        <Card
          title='js'
          detail='Lorem impsun'
          price='250'
          imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
        /> */}
    </div>
  )
}