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
    name: string;
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
    name: string;
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