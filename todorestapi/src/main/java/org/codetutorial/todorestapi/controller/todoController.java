package org.codetutorial.todorestapi.controller;

import lombok.RequiredArgsConstructor;
import org.codetutorial.todorestapi.model.Todo;
import org.codetutorial.todorestapi.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:/4200") // Allow the angular to call us
@RequiredArgsConstructor
public class todoController {

    private final TodoService todoService;

    //Get /api/todos -> returns all todos
    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        return ResponseEntity.ok(todoService.getAllTodos());
    }

    //Get /api/todos/id
    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable Long id){
        return ResponseEntity.ok(todoService.getTodoById(id));
    }

    //Post
    @PostMapping
    public ResponseEntity<Todo> createTodo(@RequestBody Todo todo){
        return ResponseEntity.status(HttpStatus.CREATED).body(todoService.createTodo(todo));
    }

    //Put
    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id,@RequestBody Todo todo){
        return ResponseEntity.ok(todoService.updateTodo(id,todo));
    }

    //Delete
    @DeleteMapping("/{id}")
    public  ResponseEntity<Void> deleteTodo(@PathVariable Long id){
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }
}
