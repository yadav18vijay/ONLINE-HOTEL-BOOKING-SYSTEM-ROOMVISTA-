package roomvista.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.function.Function;

@Service
public class JWTUtils {
    private static final long EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 7; // 7 days

    private final SecretKey Key;

    public JWTUtils() {
        String secretString = "843567893696976453275974432697R634976R738467TR678T34865R6834R8763T478378637664538745673865783678548735687R3";
        byte[] keyBytes = secretString.getBytes(StandardCharsets.UTF_8); // Correctly encoding the key
        this.Key = new SecretKeySpec(keyBytes, "HmacSHA256");
    }

    // Generate JWT token
    public String generateToken(UserDetails userDetails) {
        String token = Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(Key, SignatureAlgorithm.HS256) // Specify algorithm explicitly
                .compact();

        System.out.println("Generated Token: " + token); // Debugging
        return token;
    }

    // Extract username from token
    public String extractUsername(String token) {
        return extractClaims(token, Claims::getSubject);
    }

    // Extract specific claim
    private <T> T extractClaims(String token, Function<Claims, T> claimsTFunction) {
        return claimsTFunction.apply(
                Jwts.parserBuilder()
                        .setSigningKey(Key)
                        .build()
                        .parseClaimsJws(token)
                        .getBody()
        );
    }

    // Check if the token is still valid
    public boolean isValidToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        boolean isValid = username.equals(userDetails.getUsername()) && !isTokenExpired(token);

        System.out.println("Extracted Username: " + username);
        System.out.println("Expected Username: " + userDetails.getUsername());
        System.out.println("Is Token Expired? " + isTokenExpired(token));
        System.out.println("Is Token Valid? " + isValid);

        return isValid;
    }

    // Check if token has expired
    private boolean isTokenExpired(String token) {
        return extractClaims(token, Claims::getExpiration).before(new Date());
    }
}
