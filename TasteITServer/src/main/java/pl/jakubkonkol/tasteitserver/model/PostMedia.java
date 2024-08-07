package pl.jakubkonkol.tasteitserver.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
public class PostMedia {
    private String title;
    private String description;
    private List<String> pictures = new ArrayList<>();
}
