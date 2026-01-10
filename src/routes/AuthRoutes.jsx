import { Routes, Route } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<div>Auth Routes</div>} />
    </Routes>
  );
};

export default AuthRoutes;

