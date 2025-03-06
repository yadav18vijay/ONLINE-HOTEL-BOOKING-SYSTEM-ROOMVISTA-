import { useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService";

const RoomResult = ({ roomSearchResults }) => {
    const navigate = useNavigate();
    const isAdmin = ApiService.isAdmin();

    return (
        <section className="room-results">
            {roomSearchResults && roomSearchResults.length > 0 && (
                <div className="room-list">
                    {roomSearchResults.map(room => {
                        const roomId = room.Id || room.Id || Math.random().toString(36).substr(2, 9); // Ensure ID

                        return (
                            <div key={roomId} className="room-list-item">
                                <img className='room-list-item-image' src={room.roomPhotoUrl} alt={room.roomType} />
                                <div className="room-details">
                                    <h3>{room.roomType}</h3>
                                    <p style={{ color: "#fff" }}>Price: ₹{room.roomPrice} /night</p>
                                    <p style={{ color: "#fff" }}>Description: {room.roomDescription}</p>
                                </div>

                                <div className='book-now-div'>
                                    {isAdmin ? (
                                        <button
                                            className="edit-room-button"
                                            onClick={() => navigate(`/admin/edit-room/${roomId}`)}
                                        >
                                            Edit Room
                                        </button>
                                    ) : (
                                        <button
                                            className="book-now-button"
                                            onClick={() => navigate(`/room-details-book/${roomId}`)}
                                        >
                                            View/Book Now
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default RoomResult;