import React from 'react';
import { Stack, Box } from '@mui/material';
import { ChannelCard, Loader, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Box
      sx={{
        overflowX: 'auto', // Allow horizontal scrolling
        whiteSpace: 'nowrap', // Prevent wrapping
        scrollbarWidth: 'none', // For Firefox
        '&::-webkit-scrollbar': {
          display: 'none', // For Chrome, Safari, and Opera
        },
      }}
    >
      <Stack direction={direction || 'row'} flexWrap="nowrap" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Videos;
