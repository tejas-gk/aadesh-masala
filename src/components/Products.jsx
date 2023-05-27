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
        <div className="mt-8">
            <div className="flex gap-4 justify-center items-center">
                <TagButton tag="all" selectedTag={selectedTag} onClick={handleTagChange} />
                <TagButton tag="blended" selectedTag={selectedTag} onClick={handleTagChange} />
                <TagButton tag="grounded" selectedTag={selectedTag} onClick={handleTagChange} />
                <TagButton tag="other" selectedTag={selectedTag} onClick={handleTagChange} />
            </div>
            <div className="grid grid-cols-8 gap-4 mt-4">
                {filteredProducts.map((product, index) => (
                    <div key={index}>
                        <img src={product.image} alt={`Product ${index}`} className="h-24 w-24" />
                    </div>
                ))}
            </div>
        </div>
    );
}
