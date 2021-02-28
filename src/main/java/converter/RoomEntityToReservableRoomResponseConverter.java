package converter;

import org.springframework.core.convert.converter.Converter;

import com.hth.hollywoodtowerhotelangularspringboot.entity.RoomEntity;
import com.hth.hollywoodtowerhotelangularspringboot.model.Links;
import com.hth.hollywoodtowerhotelangularspringboot.model.Self;
import com.hth.hollywoodtowerhotelangularspringboot.model.response.ReservableRoomResponse;
import com.hth.hollywoodtowerhotelangularspringboot.rest.ResourceConstants;

public class RoomEntityToReservableRoomResponseConverter implements Converter<RoomEntity, ReservableRoomResponse>{

	@Override
	public ReservableRoomResponse convert(RoomEntity source) {

		ReservableRoomResponse reservationResponse = new ReservableRoomResponse();
		reservationResponse.setRoomNumber(source.getRoomNumber());
		reservationResponse.setPrice(Integer.valueOf(source.getPrice()));
		
		Links links = new Links();
		Self self = new Self();
		self.setRef(ResourceConstants.ROOM_RESERVATION_V1 + "/" + source.getId());
		links.setSelf(self);
		
		reservationResponse.setLinks(links);
		
		return reservationResponse;
	}
	
}
