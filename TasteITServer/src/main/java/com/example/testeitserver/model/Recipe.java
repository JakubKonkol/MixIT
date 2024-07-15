package com.example.testeitserver.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Document
@Data
public class Recipe {
    @Id
    private String recipeId;
    private Map<Integer, String> steps = new HashMap<>();
    private Map<Integer, String> pictures = new HashMap<>();
    @DBRef
    private List<Ingredient> ingredients = new ArrayList<>();
}