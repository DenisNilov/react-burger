export interface IIngredient {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: string;
    __v: any;
    _id: string;
}

export interface IUser {
    name: string;
    email: string;
    password?: string;
}

export interface Response {
    [key: string]: any;
}