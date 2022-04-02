import {createContext} from "react";
import IMenuLink from "./components/SidebarMenubar/types/IMenuLink";

export const SidebarContext = createContext<{
  menuLinks: IMenuLink[];
  isClosed: boolean;
  openSideBar: () => void

}>({
  menuLinks: [],
  isClosed: false,
  openSideBar: () => {}
});

export default SidebarContext;
