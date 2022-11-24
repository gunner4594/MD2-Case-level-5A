import {Product} from "./Product";
import {ProductManager} from "./ProductManager";

let sp1 = new Product(1,'dien thoai', 1000, 30, 'samsung');
let sp2 = new Product(2,'dien thoai', 2000, 40, 'samsung');
let sp3 = new Product(3,'dien thoai', 3000, 50, 'apple');
let sp4 = new Product(4,'dien thoai', 4000, 60, 'apple');

let productManager = new ProductManager();
productManager.add(sp1);
productManager.add(sp2);
productManager.add(sp3);
productManager.add(sp4);

// console.log('----Hiển thị tất cả sản phẩm-----');
// console.log(productManager.show());

// console.log('----Tìm kiếm sản phẩm theo thương hiệu----');
// console.log(productManager.findBrand('samsung'));

// console.log('----Sắp xếp theo giá giảm dần----');
// console.log(productManager.sortPriceDown());

// console.log('----Sắp xếp theo số lượng giảm dần----');
// console.log(productManager.sortQuanityDown());

// console.log('----Tìm kiếm theo khoảng giá----');
// console.log(productManager.findPrice(2000, 4000));

console.log('----Tìm kiếm theo tên gần nhât----');
console.log(productManager.findName('dien'));

