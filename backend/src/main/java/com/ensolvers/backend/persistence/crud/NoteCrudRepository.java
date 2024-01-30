package com.ensolvers.backend.persistence.crud;

import com.ensolvers.backend.persistence.entity.Note;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface NoteCrudRepository extends CrudRepository<Note,Integer> {

    List<Note> findAll();

    Optional<List<Note>> findByArchived(Boolean isArchived);

}
