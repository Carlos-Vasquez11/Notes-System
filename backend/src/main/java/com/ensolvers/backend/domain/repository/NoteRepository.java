package com.ensolvers.backend.domain.repository;

import com.ensolvers.backend.domain.dto.NoteDomain;

import java.util.List;

public interface NoteRepository {

    List<NoteDomain> getAll();

    NoteDomain getById(Integer id);

    List<NoteDomain> getArchived(Boolean isArchived);

    NoteDomain save(NoteDomain note);

    void deleteById(Integer note);

}
