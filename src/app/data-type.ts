export interface Signup {
    name: string,
    email: string
    password: string,

}

export interface Login {
    email: string;
    password: string,

}
export interface product {
    title: string;
    price: number;
    category: string;
    color: string;
    description: string;
    image: string;
    quantity: number | undefined;
    id: number;
    productId: undefined | number;

}
export interface cart {
    title: string;
    price: number;
    category: string;
    color: string;
    description: string;
    image: string;
    quantity: number | undefined;
    id: number | undefined;
    userId: number;
    productId: number;
}
export interface priceSummary {
    price: number;
    discount: number;
    tax: number;
    delivery: number;
    total: number
}
export interface order {
    image: string;
    email: string;
    address: string;
    contact: string;
    totalprice: number;
    userId: number;
    id: number | undefined;
}