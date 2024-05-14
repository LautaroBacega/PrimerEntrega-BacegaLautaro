import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export default class ProductManager {
  constructor(path) {
    this.path = path;
  }

  // Obtener todos los productos con o sin limite
  async getProducts(limit) {
    try {
      if (fs.existsSync(this.path)) {
        const products = await fs.promises.readFile(this.path, "utf8");
        return limit ? JSON.parse(products).slice(0, limit) : JSON.parse(products);
      } else return [];
    } catch (error) {
      console.log(error);
    }
  }

  // Crear un producto

  async createProduct(obj) {
    try {
      const product = {
        id: uuidv4(),
        status: true,
        ...obj,
      };
      const products = await this.getProducts();
      products.push(product);
      await fs.promises.writeFile(this.path, JSON.stringify(products));
      return product;
    } catch (error) {
      console.log(error);
    }
  }

  // Obtener un producto por ID
  async getProductById(id) {
    try {
      const products = await this.getProducts();
      const productExist = products.find((p) => p.id === id);
      if (!productExist) return null;
      return productExist;
    } catch (error) {
      console.log(error);
    }
  }

  // Actualizar atributos de un producto por ID
  async updateProduct(obj, id) {
    try {
      const products = await this.getProducts();
      let productExist = await this.getProductById(id);
      if (!productExist) return null;
      productExist = { ...productExist, ...obj };
      const newArray = products.filter((u) => u.id !== id);
      newArray.push(productExist)
      await fs.promises.writeFile(this.path, JSON.stringify(newArray));
      return productExist;
    } catch (error) {
      console.log(error);
    }
  }

  // Eliminar un producto por ID
  async deleteProduct(id) {
    const products = await this.getProducts();
    if (products.length > 0) {
      const productExist = await this.getProductById(id);
      if (productExist) {
        const newArray = products.filter((u) => u.id !== id);
        await fs.promises.writeFile(this.path, JSON.stringify(newArray));
        return productExist
      } 
    } else return null
  }
}
