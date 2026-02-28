package org.codetutorial.todorestapi.repository;

import org.codetutorial.todorestapi.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo,Long> {

}
