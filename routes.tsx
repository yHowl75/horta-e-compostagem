import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Compostagem } from "./components/Compostagem";
import { Automatizacao } from "./components/Automatizacao";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "compostagem", Component: Compostagem },
      { path: "automatizacao", Component: Automatizacao },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "*", Component: NotFound },
    ],
  },
]);