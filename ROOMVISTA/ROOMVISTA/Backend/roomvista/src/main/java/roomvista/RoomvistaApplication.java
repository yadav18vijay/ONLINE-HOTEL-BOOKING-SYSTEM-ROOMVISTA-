package roomvista;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "roomvista.entity") 
public class RoomvistaApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoomvistaApplication.class, args);
	}

}
