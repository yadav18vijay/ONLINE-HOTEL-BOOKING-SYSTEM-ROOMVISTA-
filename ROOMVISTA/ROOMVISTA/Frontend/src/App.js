import "./App.css";
import HomePage from "./component/home/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import AllRoomsPage from "./component/booking_rooms/AllRoomsPage";
import FindBookingPage from "./component/booking_rooms/FindBookingPage";
import RoomDetailsPage from "./component/booking_rooms/RoomDetailsPage";
import LoginPage from "./component/auth/LoginPage";
import RegisterPage from "./component/auth/RegisterPage";
import ProfilePage from "./component/profile/ProfilePage";
import EditProfilePage from "./component/profile/EditProfilePage";
import { AdminRoute, ProtectedRoute } from "./services/guard";
import AdminPage from "./component/admin/AdminPage";
import ManageRoomPage from "./component/admin/ManageRoomPage";
import ManageBookingsPage from "./component/admin/ManageBookingsPage";
import AddRoomPage from "./component/admin/AddRoomPage";
import EditRoomPage from "./component/admin/EditRoomPage";
import EditBookingPage from "./component/admin/EditBookingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/rooms" element={<AllRoomsPage />} />
            <Route exact path="/find-booking" element={<FindBookingPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />

            {/* PROTECTED ROUTES */}
            <Route
              exact
              path="/room-deltails-book/:roomId"
              element={<ProtectedRoute  element={<RoomDetailsPage/>} />}
            />
            <Route exact path="/profile" element={<ProtectedRoute element={<ProfilePage/>} />}/>
            <Route exact path="/edit-profile" element={<ProtectedRoute element={<EditProfilePage/>} />}/>


            {/* ADMIN AUTH ROUTES */}
            <Route exact path="/admin" element={<AdminRoute element={<AdminPage/>} />}/>
            <Route exact path="/admin/manage-rooms" element={<AdminRoute element={<ManageRoomPage/>} />}/>
            <Route exact path="/admin/add-room" element={<AdminRoute element={<AddRoomPage/>} />}/>
            <Route exact path="/admin/manage-bookings" element={<AdminRoute element={<ManageBookingsPage/>} />}/>
            <Route exact path="/admin/edit-room/:roomId" element={<AdminRoute element={<EditRoomPage/>} />}/>
            <Route exact path="/admin/edit-booking/:bookingCode" element={<AdminRoute element={<EditBookingPage/>} />}/>

            <Route exact path="*" element={<Navigate to="/home"/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
