package com.fisherman.fish.controller;

import com.fisherman.fish.dto.GmoolDTO;
import com.fisherman.fish.service.GmoolService;
import com.fisherman.fish.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/gmool")
public class GmoolController {
    private final GmoolService gmoolService;
    private final MemberService memberService;

    @GetMapping("/")
    public List<GmoolDTO> getGmools(){
        // 모든 그물 반환
        List<GmoolDTO> gmools = gmoolService.findAll();
        return gmools;
    }
    
    @PostMapping("/")
    public GmoolDTO createGmool(@ModelAttribute("gmool") GmoolDTO gmoolDTO){
        // 예외처리 : DTO 없이 POST 요청 보낸 경우
        if(gmoolDTO == null){
            return null;
        }
        GmoolDTO savedDTO = gmoolService.save(gmoolDTO);
        return savedDTO;
    }

    @GetMapping("/{gid}")
    public Object getGmool(@PathVariable(name="gid") Long gid){
        // 해당 그물 반환
        GmoolDTO gmool = gmoolService.findById(gid);
        if(gmool == null) return "no gmool for you!";
        return gmool;
    }

    @GetMapping("/{gid}/files")
    public String getFiles(@PathVariable(name="gid") Long gid){
        // 해당 그물의 파일 모두 반환
        return "ok";
    }

    @GetMapping("/{gid}/files/{filename}")
    public String getFile(@PathVariable(name="gid") Long gid, @PathVariable(name="filename") String fname){
        // 해당 그물의 해당 파일 반환
        return gid + fname;
    }



}
