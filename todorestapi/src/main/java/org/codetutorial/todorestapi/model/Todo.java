package org.codetutorial.todorestapi.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //Generate getters and setters and equals and toStrinf automatically
@NoArgsConstructor //Generate a no-argument constructor
@AllArgsConstructor //Generate a all-argument constructor
@Entity //JPA : marks the class as an database table
@Table(name = "todos")
public class Todo {

    @Id //This field is the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto-increment
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    private boolean completed = false;
}
