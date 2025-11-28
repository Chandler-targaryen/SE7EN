import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// Pages
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";

// Auth Pages
import { LoginPage } from "./pages/auth/LoginPage";
import { SignupPage } from "./pages/auth/SignupPage";

// Booking Pages
import { BookingForm } from "./pages/booking/BookingForm";
import { PaymentPage } from "./pages/booking/PaymentPage";
import { BookingConfirmation } from "./pages/booking/BookingConfirmation";
import { PastBookings } from "./pages/booking/PastBookings";
import { CurrentBooking } from "./pages/booking/CurrentBooking";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* AUTH ROUTES (NO LAYOUT) */}
          <Route path="/login/*" element={<LoginPage />} />
          <Route path="/signup/*" element={<SignupPage />} />

          {/* MAIN ROUTES (WITH LAYOUT) */}
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />

          <Route
            path="/services"
            element={
              <Layout>
                <ServicesPage />
              </Layout>
            }
          />

          {/* BOOKING FLOW */}
          <Route
            path="/book/:serviceId"
            element={
              <Layout>
                <BookingForm />
              </Layout>
            }
          />

          <Route
            path="/payment"
            element={
              <Layout>
                <PaymentPage />
              </Layout>
            }
          />

          <Route
            path="/confirmation"
            element={
              <Layout>
                <BookingConfirmation />
              </Layout>
            }
          />
          <Route
            path="/current-booking"
            element={
              <Layout>
                <CurrentBooking />
              </Layout>
            }
          />

          <Route
            path="/past-bookings"
            element={
              <Layout>
                <PastBookings />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}