import React from 'react';
import { useState } from "react";


const WsComponent = () => {

    const [data, setData] = useState<string>('');

    const ws = new WebSocket("ws://norma.nomoreparties.space/");

    ws.onopen = (event) => {
        console.log("Connection established");
        console.log(event.type)
    }


ws.onmessage = (event) => {
    console.log(event.data)
}


    return <div>{data}</div>;
}

export default WsComponent;