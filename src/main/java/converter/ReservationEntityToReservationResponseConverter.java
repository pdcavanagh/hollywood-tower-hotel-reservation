package converter;

import org.springframework.core.convert.converter.Converter;

import com.hth.hollywoodtowerhotelangularspringboot.entity.ReservationEntity;
import com.hth.hollywoodtowerhotelangularspringboot.model.response.ReservationResponse;

public class ReservationEntityToReservationResponseConverter implements Converter<ReservationEntity, ReservationResponse> {

	@Override
	public ReservationResponse convert(ReservationEntity source) {

		ReservationResponse reservationResponse = new ReservationResponse();
		reservationResponse.setCheckin(source.getCheckin());
		reservationResponse.setCheckout(source.getCheckout());
		reservationResponse.setId(source.getId());

		return reservationResponse;
	}

}
