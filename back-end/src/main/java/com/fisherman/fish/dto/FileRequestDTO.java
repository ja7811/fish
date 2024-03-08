package com.fisherman.fish.dto;

import com.fisherman.fish.entity.FileEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class FileRequestDTO extends FileDTO{
    private MultipartFile file; // 파일

    public FileRequestDTO(String originalFilename, String storedFilename, MultipartFile file, long fileSize) {
        super(originalFilename, storedFilename, fileSize);
        this.file = file;
    }
}
