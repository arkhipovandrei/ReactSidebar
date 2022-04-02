import style from '../../../../assets/style.module.scss';
import classNames from "classnames";
import {BiSearch} from "react-icons/bi";
import {createRef, useContext} from "react";
import {SideBarContext} from "../../../../Sidebar";

const SearchBox = () => {

  const {isClosed, openSideBar} = useContext(SideBarContext);
  const ref = createRef<any>()

  const handleClick = () => {
    if(!isClosed) return;
    openSideBar();
    if(ref.current) ref.current.focus()
  };

  return <li className={style.SearchBox}>

    <span className={classNames(style.SidebarIcon)} onClick={handleClick} >
      <BiSearch />
    </span>
    <input ref={ref} type="text" placeholder="Search..." autoFocus={!isClosed}/>

  </li>
}

export default SearchBox;
