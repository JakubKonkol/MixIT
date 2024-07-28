package pl.jakubkonkol.tasteitserver.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.jakubkonkol.tasteitserver.dto.PageDto;
import pl.jakubkonkol.tasteitserver.dto.PostDto;
import pl.jakubkonkol.tasteitserver.service.PostService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/post")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping("/{postId}")
    public ResponseEntity<PostDto> getPost(@PathVariable String postId) {
        PostDto postDto = postService.getPost(postId);
        return ResponseEntity.ok(postDto);
    }

    @GetMapping("/feed")
    public ResponseEntity<PageDto<PostDto>> getRandomPosts(@RequestParam(defaultValue = "0") Integer page,
                                                        @RequestParam(defaultValue = "20") Integer size) {
        PageDto<PostDto> pageDto = postService.getRandomPosts(page, size);
        return ResponseEntity.ok(pageDto);
    }

    @GetMapping("/search")
    public ResponseEntity<List<PostDto>> searchPostsByTitle(@RequestParam String query) {
        List<PostDto> postDtos = postService.searchPostsByTitle(query);
        return ResponseEntity.ok(postDtos);
    }
}
