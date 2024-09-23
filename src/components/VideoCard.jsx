import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const decodeHTML = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ position: 'relative', width: { xs: '100%', sm: '540px', md: '500px' }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
          width: '100%', // Use full width of the card
          height: 280, // Thumbnail height
          objectFit: 'cover', // Cover the area, maintaining aspect ratio
        }}
      />
    </Link>
    <CardContent
      sx={{
        position: 'absolute',
        bottom: '00px', // Move the box lower
        left: 0,
        right: 0,
        backgroundColor: 'rgba(30, 30, 30, 0.7)', // Semi-transparent background
        height: '50px', // Reduced height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px 8px', // Adjust padding as needed
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="#FFF"
          sx={{
            fontSize: '.9rem',
            whiteSpace: 'normal', // Allow the text to wrap
            overflow: 'hidden',   // Hide overflow if necessary
            textOverflow: 'ellipsis', // Show ellipsis (...) when overflowing
          }}
        >
          {decodeHTML(snippet?.title.slice(0, 100) || demoVideoTitle.slice(0, 100))}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" color="gray" sx={{ fontSize: '0.8rem', marginBottom: '-15px'}}>
          {decodeHTML(snippet?.channelTitle || demoChannelTitle)}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
