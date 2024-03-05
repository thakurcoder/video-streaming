import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import { Provider } from 'react-redux';
import Store from './component/utils/Store';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import VideoContainer from './component/VideoContainer';
import Watch from './component/Watch';
import SearchResult from './component/SearchResult';
import Search from './component/Search';

// const Router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Body/>,
//     children:[
//       {
//         path:"/",
//         element:<VideoContainer/>
//       },
//       {
//         path:'/watch',
//         element:<Watch/>
//       },
//       {
//         path:"/results",
//         element:<SearchResult/>
//       },

//     ]

//   }
// ])

// function App() {
//   return (
//       <Provider store={Store}>
//     <div>
//           <Header/>
//           <RouterProvider router={Router} />

         
//     </div>
//         </Provider>
//   );
// }


const App = ()=>{
  return(
    <div>

      <Provider store={Store}>
        <Header/>
        <Outlet/>
      
      </Provider>

    </div>
  )

}

export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>,
        children:[
          {
            path:"/",
            element:<VideoContainer/>
          },
          {
            path:'/watch',
            element:<Watch/>
          }
        ]
      },
      
      {
        path:"/results",
        element:<SearchResult/>
      },
    ]
  }
])


export default App;
