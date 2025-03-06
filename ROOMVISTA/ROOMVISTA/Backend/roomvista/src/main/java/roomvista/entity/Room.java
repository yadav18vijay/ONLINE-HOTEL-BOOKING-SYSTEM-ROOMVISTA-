package roomvista.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "rooms")
public class Room {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String roomType;
    private BigDecimal roomPrice;
    private String roomPhotoUrl;
    private String roomDescription;
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Booking> bookings = new ArrayList<>();

    

    public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getRoomType() {
		return roomType;
	}


	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}


	public BigDecimal getRoomPrice() {
		return roomPrice;
	}


	public void setRoomPrice(BigDecimal roomPrice) {
		this.roomPrice = roomPrice;
	}


	public String getRoomPhotoUrl() {
		return roomPhotoUrl;
	}


	public void setRoomPhotoUrl(String roomPhotoUrl) {
		this.roomPhotoUrl = roomPhotoUrl;
	}


	public String getRoomDescription() {
		return roomDescription;
	}


	public void setRoomDescription(String roomDescription) {
		this.roomDescription = roomDescription;
	}


	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}


	@Override
    public String toString() {
        return "Room{" +
                "id=" + id +
                ", roomType='" + roomType + '\'' +
                ", roomPrice=" + roomPrice +
                ", roomPhotoUrl='" + roomPhotoUrl + '\'' +
                ", roomDescription='" + roomDescription + '\'' +
                '}';
    }


	public List<Booking> getBookings() {
		// TODO Auto-generated method stub
		return null;
	}
}