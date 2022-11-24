import {Product} from "./Product";
export class ProductManager {
    listProduct: Product[] = [];

    add(product: Product): void {
        this.listProduct.push(product);
    }

    show() {
        return this.listProduct;
    }

    edit(id: number, productEdit: Product) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id === id) {
                this.listProduct[i] = productEdit
            }
        }
    }

    deleteProduct(id: number) {
        let deleteItem = this.listProduct.filter(item => item.id !== id);
        return deleteItem;
    }

    findName(str: string) {
        // @ts-ignore
        let result = this.listProduct.filter(product => product.name.toUpperCase().includes(str.toLowerCase()));
        return result;
    }

    findPrice(a: number, b: number) {
        let result = this.listProduct.filter(product => a <= product.price && product.price <= b);
        return result;
    }

    sortPriceUp () {
        let result = this.listProduct.slice().sort((a,b) => a.price - b.price )
        return result;
    }

    sortPriceDown () {
        let result = this.listProduct.slice().sort((a,b) => b.price - a.price )
        return result;
    }

    sortQuanityDown () {
        let result = this.listProduct.slice().sort((a,b) => b.quanity - a.quanity )
        return result;
    }

    findBrand (brand: string) {
        let result = this.listProduct.filter(product => product.brand === brand);
        return result;
    }
}