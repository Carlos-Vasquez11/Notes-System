package com.ensolvers.backend.domain.dto;

import java.util.List;

public class NoteDomain {

    private Integer noteId;

    private String description;

    private Boolean archived;

    private List<String> tags;

    public Integer getNoteId() {
        return noteId;
    }

    public void setNoteId(Integer todoId) {
        this.noteId = todoId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getArchived() {
        return archived;
    }

    public void setArchived(Boolean archived) {
        this.archived = archived;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }
}
