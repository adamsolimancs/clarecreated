import React from "react";

export const metadata = {
    title: "Recipes - clarecreated",
    description: "A collection of recipes curated by ClareCreated.",
};

export default function RecipesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}