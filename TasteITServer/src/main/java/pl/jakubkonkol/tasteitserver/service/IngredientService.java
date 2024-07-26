package pl.jakubkonkol.tasteitserver.service;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import pl.jakubkonkol.tasteitserver.model.Ingredient;
import pl.jakubkonkol.tasteitserver.repository.IngredientRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    @Cacheable("ingredients")
    public Mono<Ingredient> findByName(String name) {
        if (name == null) {
            throw new IllegalArgumentException("Name cannot be null.");
        }
        return ingredientRepository.findByName(name);
    }

    public Mono<Ingredient> save(Ingredient ingredient) {
        if (ingredient == null) {
            throw new IllegalArgumentException("Ingredient cannot be null.");
        }
        return ingredientRepository.findByName(ingredient.getName())
                .switchIfEmpty(ingredientRepository.save(ingredient));
    }

    public Flux<Ingredient> saveAll(List<Ingredient> ingredients) {
        if (ingredients == null) {
            throw new IllegalArgumentException("List of ingredients cannot be null.");
        }
        return Flux.fromIterable(ingredients)
                .flatMap(this::save);
    }

    public Mono<Void> deleteAll() {
        return ingredientRepository.deleteAll();
    }

    public Flux<Ingredient> getAll() {
        return ingredientRepository.findAll();
    }
}
