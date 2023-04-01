import "./App.css";

import { Provider } from "react-redux";
import store from "store/store";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CakePage, PresentPage } from "features";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="cake" element={<CakePage />} />
          <Route path="present" element={<PresentPage />} />

          <Route path="*" element={<Navigate replace to="/cake" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
