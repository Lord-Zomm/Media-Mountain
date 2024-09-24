import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const decodeHTML = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const isPortrait = useMediaQuery("(orientation: portrait)");

  // Extracting date, adjust based on your data structure
  const publishDate = snippet?.publishedAt ? new Date(snippet.publishedAt).toLocaleDateString() : "Unknown date";

  return (
    <Card sx={{ width: { xs: '100%', sm: isPortrait ? '320px' : '500px' }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: '100%',
            height: isPortrait ? 170 : 280,
            objectFit: 'cover',
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: isPortrait ? '150px' : '67px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
            sx={{
              fontSize: isPortrait ? '1rem' : '.9rem',
              whiteSpace: 'normal',
              overflow: 'hidden',
              marginTop: '-3px',
              marginBottom: '7px',
              textOverflow: 'ellipsis',
            }}
          >
            {decodeHTML(snippet?.title.slice(0, 100) || demoVideoTitle.slice(0, 100))}
          </Typography>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" color="gray" sx={{ fontSize: isPortrait ? '0.9rem' : '0.8rem', marginRight: '8px' }}>
              {decodeHTML(snippet?.channelTitle || demoChannelTitle)}
              <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
          <Typography variant="caption" color="gray" sx={{ fontSize: isPortrait ? '0.8rem' : '0.7rem' }}>
            {publishDate}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
