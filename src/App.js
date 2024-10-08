import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <Router basename=''>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        {/*<Route exact path='/' element={<Navigate to='/video/lWy4uoPJboo' />} />*/}
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </Router>
);

export default App;
