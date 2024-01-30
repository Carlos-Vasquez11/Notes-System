package com.ensolvers.backend.web.controller;

import com.ensolvers.backend.domain.dto.NoteDomain;
import com.ensolvers.backend.domain.services.NoteDomainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class NoteController {

    @Autowired
    private NoteDomainService noteDomainService;

    @GetMapping("all")
    public ResponseEntity<List<NoteDomain>> getAll(){
        return new ResponseEntity<>(noteDomainService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<NoteDomain> save(@RequestBody NoteDomain noteDomain){
        System.out.println("GUARDANDO");
        return new ResponseEntity<>(noteDomainService.save(noteDomain), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        System.out.println("Recibi este ID para borrar:" + id);
        noteDomainService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
