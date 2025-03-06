package roomvista.controller;

import roomvista.dto.LoginRequest;
import roomvista.dto.Response;
import roomvista.entity.User;
import roomvista.service.interfac.IUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Enable frontend access (optional)
@RequestMapping("/auth")
public class AuthController {

    private final IUserService userService;

    // Constructor Injection (Better than @Autowired on fields)
    public AuthController(IUserService userService) {
        this.userService = userService;
    }

    // REGISTER NEW USER
    // REGISTER NEW USER
    @PostMapping("/register")
    public ResponseEntity<Response> register(@RequestBody User user) {
        Response response = userService.register(user);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    // LOGIN USER & RETURN JWT
    @PostMapping("/login")
    public ResponseEntity<Response> login(@RequestBody LoginRequest loginRequest) {
        Response response = userService.login(loginRequest);

        // Ensure response contains a JWT token
        if (response.getToken() == null || response.getToken().isEmpty()) {
            return ResponseEntity.status(401).body(response); // Unauthorized if no token
        }

        return ResponseEntity.status(response.getStatusCode()).body(response);
    }
}
