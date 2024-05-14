# Primer Entrega
# Nombre: Bacega Lautaro

- Inicializar servidor en puerto 8080

## Peticiones:

<!-- Crear Producto -->
- POST localhost:8080/api/products
Body -> raw -> Json -> 
{
    "title": "Bicicleta Rodado 20",
    "description": "Bicicleta Rodado 20 color blanco",
    "code": "BIKE001",
    "price": 300000,
    "stock": 5,
    "category": "Bicicletas",
    "thumbnails": [
        "https://example.com/thumbnail1.jpg",
        "https://example.com/thumbnail2.jpg"
    ]
}
Todos los campos son obligatorios, a excepción de thumbnails

<!-- Obtener Productos -->
- GET localhost:8080/api/products

<!-- Obtener Productos (con limit) -->
- GET localhost:8080/api/products?limit=* (reemplazar el asterisco por el numero deseado)

<!-- Obtener Productos por ID -->
- GET localhost:8080/api/products/:pid

<!-- Actualizar Producto por ID -->
- PUT localhost:8080/api/products/:pid

<!-- Eliminar Producto por ID -->
- DELETE localhost:8080/api/products/:pid


<!-- Crear un Carrito -->
- POST localhost:8080/api/carts/

<!-- Obtener Carrito por ID -->
- GET localhost:8080/api/carts/:cid

<!-- Agregar un producto a un carrito -->
- POST localhost:8080/api/carts/:cid/product/:pid (en cas de que un producto ya se haya agregado 'quantity' aumenta segun corresponda)