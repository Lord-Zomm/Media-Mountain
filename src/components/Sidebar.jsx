import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category)} // Set the entire category
        style={{
          background: category.tag === selectedCategory.tag ? "#FC1503" : "transparent",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: "white", marginRight: "15px" }}>{category.icon}</span>
        <span style={{ opacity: category.tag === selectedCategory.tag ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
