package com.fisherman.fish.dto;

import com.fisherman.fish.entity.FileEntity;
import com.fisherman.fish.utility.FileUtil;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class FileDTO {
    private String originalFileName; // 원래 파일명
    private String storedFileName; // 서버 저장용 파일명 -> PK

    private long fileSize; // 해당 파일 크기

    public static FileDTO toFileDTO(FileEntity fileEntity){
        FileDTO fileDTO = new FileResponseDTO();
        fileDTO.setOriginalFileName(fileEntity.getOriginalFileName());
        fileDTO.setStoredFileName(fileEntity.getStoredFileName());
        fileDTO.setFileSize(fileEntity.getFileSize());
        return fileDTO;
    }
}
