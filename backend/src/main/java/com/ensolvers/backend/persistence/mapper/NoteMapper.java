package com.ensolvers.backend.persistence.mapper;

import com.ensolvers.backend.domain.dto.NoteDomain;
import com.ensolvers.backend.persistence.entity.Note;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NoteMapper {

    @Mappings({
        @Mapping(source = "id", target = "noteId"),
        @Mapping(source = "description", target = "description"),
        @Mapping(source = "archived", target = "archived"),
        @Mapping(source = "tags", target = "tags")
    })
    NoteDomain toNoteDomain(Note note);
    List<NoteDomain> toNoteDomains(List<Note> notes);

    @InheritInverseConfiguration
    Note toNote(NoteDomain noteDomain);
}
