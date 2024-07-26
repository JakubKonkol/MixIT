package pl.jakubkonkol.tasteitserver.repository;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import pl.jakubkonkol.tasteitserver.model.Ingredient;
import reactor.core.publisher.Mono;

import java.util.Optional;

public interface IngredientRepository extends ReactiveMongoRepository<Ingredient, String> {
    @Query("{ 'name': ?0 }")
    Mono<Ingredient> findByName(String name);

}
