import { Routes, Route } from "react-router-dom";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<div>Protected Routes</div>} />
    </Routes>
  );
};

export default ProtectedRoutes;

