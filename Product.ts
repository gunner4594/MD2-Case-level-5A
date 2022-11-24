export class Product {
    private _id: number;
    private _name: string;
    private _price: number;
    private _quanity: number;
    private _brand: string;

    constructor(id: number, name: string, price: number, quanity: number, brand: string) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quanity = quanity;
        this._brand = brand;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get quanity(): number {
        return this._quanity;
    }

    set quanity(value: number) {
        this._quanity = value;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }
}