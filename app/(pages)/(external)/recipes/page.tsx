'use client';
import React from "react";
import styles from "./recipes.module.css"

export default function RecipesPage() {
    return (
        <main className="flex flex-col items-center justify-start min-h-screen gap-5 pt-14">
            <h1 className="text-3xl sm:text-6xl font-bold text-center pb-10 drop-shadow-md">recipes</h1>
            <p className="text-lg sm:text-xl text-center max-w-xs sm:max-w-xl drop-shadow-md">
                coming soon!
            </p>
            {/* Add recipe listings or categories here */}
        </main>
    );
}
