import { Outlet, useLocation } from "react-router-dom";
import LpHeader from "src/components/header/Header";
import cooperatesData from "src/data/CooporateData";

const HeaderLayout = () => {

  const location = useLocation();
  const pathName = location.pathname.split('/')[1]
  const currenLand = cooperatesData.find((item) => item.name === pathName)
  
  return (
    <>
      <LpHeader {...currenLand}/>
      <div>
        <Outlet />
      </div>
    </>
  )
}


export default HeaderLayout;
