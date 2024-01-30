package com.ensolvers.backend.persistence.crud;

import com.ensolvers.backend.domain.dto.NoteDomain;
import com.ensolvers.backend.persistence.mapper.NoteMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NoteRepository implements com.ensolvers.backend.domain.repository.NoteRepository {

    @Autowired
    private NoteCrudRepository noteCrudRepository;
    @Autowired
    private NoteMapper noteMapper;

    @Override
    public List<NoteDomain> getAll() {
        return noteMapper.toNoteDomains(noteCrudRepository.findAll());
    }

    @Override
    public NoteDomain getById(Integer id) {
        return noteMapper.toNoteDomain(noteCrudRepository.findById(id).get());
    }

    @Override
    public List<NoteDomain> getArchived(Boolean isArchived) {
        return noteMapper.toNoteDomains(noteCrudRepository.findByArchived(isArchived).get());
    }

    @Override
    public NoteDomain save(NoteDomain noteDomain) {
        return noteMapper.toNoteDomain(noteCrudRepository.save(noteMapper.toNote(noteDomain)));
    }

    public void deleteById(Integer todoId){
        noteCrudRepository.deleteById(todoId);
    }

}
