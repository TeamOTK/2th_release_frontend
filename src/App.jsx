import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


import CharacterCommunity from './components/CharacterCommunity';

const App = () => {

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/community' element={<CharacterCommunity/>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;

// const router = createBrowserRouter([
//   { path: '/', element: <HomePage />},
//   {
//     element: <RootLayout />,
//     id: 'root',
//     children: [
//       {path: 'main', element: <MainPage/>},
//       {path: 'character', element: <CharacterPage/>},
//       {
//         path: 'page', 
//         element: <ChatLayout/>,
//         children: [
//           {path:'chat', element: <Chat/>},
//           {path:'search', element: <Search/>},
//           {path:'situation', element: <Situation/>}
//         ]
//       }
//     ]
//   }
// ])


// ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
