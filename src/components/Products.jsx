import { useState } from "react";
import { products } from "../data/products";
import TagButton from "./common/TagButton";

export default function ProductFilter() {
    const [selectedTag, setSelectedTag] = useState('all');

    const handleTagChange = (tag) => {
        setSelectedTag(tag);
    };

    const filteredProducts = selectedTag === 'all' ? products : products.filter(product => product.tag === selectedTag);

    return (
        <div className="mt-8 ">
            <div className="flex gap-4 justify-center items-center bg-gray-200 w-fit mx-auto">
                <TagButton tag="all" selectedTag={selectedTag} onClick={handleTagChange} />
                <TagButton tag="blended" selectedTag={selectedTag} onClick={handleTagChange} />
                <TagButton tag="grounded" selectedTag={selectedTag} onClick={handleTagChange} />
                <TagButton tag="other" selectedTag={selectedTag} onClick={handleTagChange} />
            </div>
            <div className="grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-3 gap-4 mt-4">
                {filteredProducts.map((product, index) => (
                    <div key={index}>
                        <img src={product.image} alt={`Product ${index}`} className="h-32 w-32 lg:h-42 lg:w-42 mx-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
}
