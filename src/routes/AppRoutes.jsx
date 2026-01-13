import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";


const AppRoutes = () => {
  return ( 
   
    <Routes>
    
        {/* Admin Panel */}
        <Route path="/admin/*" element={<AdminRoutes />} />


      <Route path="/*" element={<PublicRoutes />} />. 

        
    </Routes>
  );
};

export default AppRoutes;

