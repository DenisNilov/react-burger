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
    id: string;
}

export interface IUser {
    name?: string;
    email: string;
    password?: string;
}

export interface Response {
    [key: string]: any;
}

export interface IAction {
    type: string;
    payload?: any;
}


export interface IOrderInfo {
    createdAt: string;
    updatedAt: string;
    ingredients: string[];
    name: string;
    number: number;
    status: "done" | "created";
    _id: string;
    price: number;
}

export interface IOrder {
    order: IOrderInfo,
    name: string,
    success: boolean
}

export interface IIngDetailsInitial {
    name: string,
    image_large: string,
    calories: number,
    proteins: number,
    fat: number,
    carbohydrates: number
} 