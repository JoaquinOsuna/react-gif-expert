import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/*  titulo  */}
            <h1>Gift Expert App</h1>


            {/* Input */}
            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={(event) => onAddCategory(event)}
            />


            {
                categories.map((category) =>
                (<GifGrid key={category} category={category} />
                ))
            }

            {/* Gif Item */}
        </>
    )
}