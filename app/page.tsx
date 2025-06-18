"use client";

import React from "react";
import { useAppSelector } from "./storage/hooks";



export default function Page() {
    const author = useAppSelector((state) => state.demo.author);
    const title = useAppSelector((state) => state.demo.title);
    const description = useAppSelector((state) => state.demo.description);
    return (
        <div>
            <h1>Hi, from {author}!</h1>
            <h2>Welcome to {title}!</h2>
            <p>{description}</p>
        </div>
    );
}
