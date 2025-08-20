import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Swal from "sweetalert2"
import logo from "../images/enduro.png"

export default function ProductList() {
  const data = useStaticQuery(graphql`
    query {
      allProductsJson {
        nodes {
          id
          name
          price
          image {
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const [search, setSearch] = useState("")
  const [cartCount, setCartCount] = useState(0)

  const filtered = data.allProductsJson.nodes.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleAddToCart = productId => {
    setCartCount(cartCount + 1)

    // Animación simulada
    const card = document.getElementById(`product-${productId}`)
    if (card) {
      card.classList.add("added")
      setTimeout(() => card.classList.remove("added"), 300)
    }

    // Alerta con SweetAlert
    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito. (simulación)",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <main className="container">
      <header
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          class="logo"
          src={logo}
          alt="Logo"
          style={{ width: "250px", height: "50px", objectFit: "contain" }}
        />
        <h3>Carrito: {cartCount}</h3>
      </header>

      <input
        type="search"
        placeholder="Buscar productos..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid">
        {filtered.map(product => {
          const img = getImage(product.image)
          return (
            <article key={product.id} id={`product-${product.id}`}>
              {img && <GatsbyImage image={img} alt={product.name} />}
              <h2>{product.name}</h2>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button onClick={() => handleAddToCart(product.id)}>
                Comprar
              </button>
            </article>
          )
        })}
        {filtered.length === 0 && <p>No hay resultados...</p>}
      </div>
    </main>
  )
}
