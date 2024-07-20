package com.example.testeitserver.model;

import com.example.testeitserver.model.enums.PostType;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document
@Data
public class Post {
    @Id
    private String postId;
    private String userId;
    private PostType postType;
    private PostMedia postMedia;
    private Recipe recipe;
    @DBRef
    private List<Tag> tags = new ArrayList<>();
    @DBRef
    private List<Like> likes = new ArrayList<>();
    @DBRef
    private List<Comment> comments = new ArrayList<>();

    @CreatedDate
    private Date createdDate;
}
