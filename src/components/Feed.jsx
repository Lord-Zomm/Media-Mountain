import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import { categories } from "../utils/constants";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videosBySubcategory, setVideosBySubcategory] = useState({});

  useEffect(() => {
    // Clear previous videos
    setVideosBySubcategory({});

    // Fetch videos for each subcategory
    const fetchVideos = async () => {
      const promises = selectedCategory.subcategories.map(sub =>
        fetchFromAPI(`search?part=snippet&q=${sub.tag}`)
          .then(data => {
            setVideosBySubcategory(prev => ({ ...prev, [sub.tag]: data.items }));
          })
      );
      await Promise.all(promises);
    };

    fetchVideos();
  }, [selectedCategory]); // Ensure this listens to changes in selectedCategory

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} // Ensure the sidebar can change the category
        />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory.name}
        </Typography>

        {selectedCategory.subcategories.map((sub) => (
          <Box key={sub.tag} mb={3}>
            <Typography variant="h5" fontWeight="bold" sx={{ color: "white", mb: 1 }}>
              {sub.name}
            </Typography>
            <Videos videos={videosBySubcategory[sub.tag]} /> {/* Use videos specific to the subcategory */}
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default Feed;
