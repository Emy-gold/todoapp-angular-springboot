package org.codetutorial.todorestapi.service;

import lombok.RequiredArgsConstructor;
import org.codetutorial.todorestapi.model.Todo;
import org.codetutorial.todorestapi.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository todoRepository;

    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }

    public Todo getTodoById(Long id){
        return  todoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo not Found : " + id));
    }

    public Todo createTodo(Todo todo){
        return todoRepository.save(todo);
    }

    public Todo updateTodo(Long id,Todo todo){
        Todo existing = getTodoById(id);
        existing.setTitle(todo.getTitle());
        existing.setDescription(todo.getDescription());
        existing.setCompleted(todo.isCompleted());
        return todoRepository.save(existing);
    }

    public void deleteTodo(Long id){
        todoRepository.deleteById(id);
    }
}
