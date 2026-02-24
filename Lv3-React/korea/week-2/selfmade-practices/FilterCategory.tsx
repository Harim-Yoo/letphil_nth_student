import { useState } from "react";
// ==========================================
// 5. Filter Category (목록 필터링 상태 업데이트)
// ==========================================
/**
 * Components: ProductPage (Parent), FilterButton (Child)
 * Requirements:
 * - Parent stores: selectedCategory (string, e.g., "All", "Electronics", "Clothing")
 * - Child receives: category string, onSelect function
 * - Child action: Clicking the filter sets the parent's selectedCategory string
 */

const FilterButton = (props:{
  category:CategoryType;
  onSelect: (category:CategoryType) => void;
}) => {
  const {category, onSelect} = props;
  return <button onClick = {()=>onSelect(category)}>{category}</button>
};

type CategoryType = "Electronics" | "Clothing" | "All"

type Product = {
  id: number;
  name: string;
  category: "Electronics" | "Clothing"
}

export const ProductPage = () => {

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All")

  const products: Product[] = [
    { id: 1, name: "ThinkPad", category: "Electronics" },
    { id: 2, name: "AirPods", category: "Electronics" },
    { id: 3, name: "Uniqlo Shirt", category: "Clothing" },
  ];

  const filteredProducts = products.filter((prod)=>{
    if (selectedCategory === "All") return true
    return prod.category === selectedCategory}
  );

  return(
    <>
    <div>
      <FilterButton category = "All" onSelect = {(cat:CategoryType)=>setSelectedCategory(cat)}/>
      <FilterButton category = "Electronics" onSelect = {(cat)=>setSelectedCategory(cat)}/>
      <FilterButton category = "Clothing" onSelect = {(cat)=>setSelectedCategory(cat)}/> 
    </div>
    {filteredProducts.map((item)=>(
      <div key={item.id} className="flex flex-col justify-center items-center gap-2">
        <span>Name: {item.name}</span>
      </div>
    ))}
    </>
  );
};
