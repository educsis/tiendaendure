import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ProductCard({ product }) {
  const image = getImage(product.image)
  return (
    <div className="bg-zinc-800 rounded-2xl shadow-md p-4 w-full max-w-xs hover:scale-105 transition-transform duration-200">
      {image && (
        <GatsbyImage
          image={image}
          alt={product.name}
          className="rounded-xl h-40 w-full object-cover"
        />
      )}
      <h3 className="text-lg font-semibold text-white mt-3">{product.name}</h3>
      <p className="text-accent font-bold text-xl">
        ${product.price.toFixed(2)}
      </p>
      <button className="mt-3 w-full bg-accent text-zinc-900 font-medium py-2 rounded-xl hover:bg-zinc-700 hover:text-white transition-colors">
        Comprar
      </button>
    </div>
  )
}
