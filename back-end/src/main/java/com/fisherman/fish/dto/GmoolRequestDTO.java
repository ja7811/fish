package com.fisherman.fish.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class GmoolRequestDTO extends GmoolDTO{
    private List<MultipartFile> files = null;

    public List<FileDTO> convertFilesToFileDTOList(){
        if(fileDTOList == null) fileDTOList = new ArrayList<>();
        for(MultipartFile f : files){
            FileRequestDTO fd = new FileRequestDTO(f.getOriginalFilename(), null, f, f.getSize());
            fileDTOList.add(fd);
        }
        setFileCount(files.size());
        return fileDTOList;
    }
}
