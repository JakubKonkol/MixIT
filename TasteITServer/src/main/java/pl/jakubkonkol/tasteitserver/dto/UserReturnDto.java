package pl.jakubkonkol.tasteitserver.dto;

import lombok.Data;
import pl.jakubkonkol.tasteitserver.model.Authentication;

import java.time.LocalDate;
import java.util.List;
@Data
public class UserReturnDto {
    private String userId;
    private String email;
    private String displayName;
    private String bio;
    private String profilePicture;
    private LocalDate createdAt;
    private LocalDate birthDate;
    private Boolean firstLogin;
    private List<String> roles;
}