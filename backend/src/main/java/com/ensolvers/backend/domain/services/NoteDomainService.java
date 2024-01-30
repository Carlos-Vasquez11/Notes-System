package com.ensolvers.backend.domain.services;

import com.ensolvers.backend.domain.dto.NoteDomain;
import com.ensolvers.backend.domain.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteDomainService {

    @Autowired
    private NoteRepository noteRepository;

    public List<NoteDomain> getAll(){
        return noteRepository.getAll();
    }

    public List<NoteDomain> getArchived(Boolean isArchived){
        return noteRepository.getArchived(isArchived);
    }

    public NoteDomain getNoteById(Integer id){
        return noteRepository.getById(id);
    }

    public NoteDomain save (NoteDomain noteDomain){
        return noteRepository.save(noteDomain);
    }

    public void deleteById(Integer noteId){
        noteRepository.deleteById(noteId);
    }

}
