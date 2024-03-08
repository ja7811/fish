package com.fisherman.fish.dto;

import com.fisherman.fish.entity.FileEntity;
import com.fisherman.fish.utility.FileUtil;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class FileResponseDTO extends FileDTO{
    private String fileUrl; // 파일 url

    public static FileResponseDTO toFileDTO(FileEntity fileEntity) {
        FileResponseDTO fileResponseDTO = new FileResponseDTO();
        fileResponseDTO.setOriginalFileName(fileEntity.getOriginalFileName());
        fileResponseDTO.setStoredFileName(fileEntity.getStoredFileName());
        fileResponseDTO.setFileUrl(FileUtil.getFinalPath(fileEntity.getStoredFileName()));
        fileResponseDTO.setFileSize(fileEntity.getFileSize());
        return fileResponseDTO;
    }
}
