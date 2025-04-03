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

export { TABS, BASE_URL };