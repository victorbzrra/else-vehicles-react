import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AppLayout } from '../components/AppLayout';

import { Admin } from '../pages/Admin';
import { Offers } from '../pages/Offers';

export function AppRoutes() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Offers />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}