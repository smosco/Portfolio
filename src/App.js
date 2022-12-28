import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";
import NotFound from "./pages/NotFound";
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "/video/:id",
        element: <VideoDetail />,
      },
      {
        path: "/channel/:id",
        element: <ChannelDetail />,
      },
      {
        path: "/search/:searchTerm",
        element: <SearchFeed />,
      },
    ],
  },
]);

export default function App() {
  return (
    //<QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    //</QueryClientProvider>
  );
}
