interface ITab {
    id: string;
    title: string;
}

const TABS: Array<ITab> = [
    { id: "bun", title: 'Булки' },
    { id: "sauce", title: 'Соусы' },
    { id: "main", title: 'Начинки' },
];

const BASE_URL: string = "https://norma.nomoreparties.space/api";

const orders = [{
    createdAt: "2025-06-26T16:57:38.801Z",
    updatedAt: "2025-06-26T16:57:39.561Z",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943"],
    name: "Space флюоресцентный бургер",
    number: 82732,
    status: "done" as const,
    _id: '82732',
    price: 1068,
}, {
    createdAt: "2025-06-26T16:57:38.801Z",
    updatedAt: "2025-06-26T16:57:39.561Z",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943"],
    name: "Space флюоресцентный бургер",
    number: 12732,
    status: "created" as const,
    _id: '82732',
    price: 5668,
}]


const wsocketFeed = `{
    "success": true,
    "orders": [
        {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "",
            "status": "done",
            "number": 5622,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        }, {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "",
            "status": "created",
            "number": 22154,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        }
    ],
    "total": 15,
    "totalToday": 1
}`

export { TABS, BASE_URL, orders, wsocketFeed };