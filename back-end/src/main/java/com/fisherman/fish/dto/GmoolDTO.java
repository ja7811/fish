package com.fisherman.fish.dto;

import java.time.LocalDateTime;

public class GmoolDTO {
    private long id; // 그물 id
    private String gmoolName; // 그물명
    private String password; // 그물 암호
    private LocalDateTime createdTime; // 생성시각
    private int dueMinute; // 유효기간 (분)
    private int pinNumber; // 그물 핀번호
    private int fileCount; // 첨부 파일 수

}