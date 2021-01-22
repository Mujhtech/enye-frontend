import React from 'react'
import CardItem from './CardItem'
import Spinner from './Spinner'

export default function Card({isLoading, items}) {
    return isLoading ? (
        <Spinner />
      ) : (
        <section className='cards'>
          {items.map((item, index) => (
            <CardItem key={index} item={item}></CardItem>
          ))}
        </section>
      )
}
