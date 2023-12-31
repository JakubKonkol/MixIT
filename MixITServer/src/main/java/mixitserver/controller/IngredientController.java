package mixitserver.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import mixitserver.model.dto.DrinkDTO;
import mixitserver.model.dto.IngredientDTO;
import mixitserver.service.IngredientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/v1/public/ingredient")
@RequiredArgsConstructor
public class IngredientController {
    private final IngredientService ingredientService;

    @GetMapping("/all")
    public ResponseEntity<List<IngredientDTO>> getAll() {
        return ResponseEntity.ok(ingredientService.getAll());
    }

    @GetMapping("/search")
    public ResponseEntity<List<IngredientDTO>> searchByName(@RequestParam String name){
        return ResponseEntity.ok(ingredientService.searchByname(name));
    }
    @GetMapping("/id")
    public ResponseEntity<IngredientDTO> getById(@RequestParam int id){
        return ResponseEntity.ok(ingredientService.getById(id));
    }
    @GetMapping("/allDrinksById")
    public ResponseEntity<List<DrinkDTO>> searchDrinksFromIngredientsById(@RequestParam int id){
        return ResponseEntity.ok(ingredientService.searchDrinksFromIngredientsById(id));
    }

}
