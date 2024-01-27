package com.fisherman.fish.dto;

import com.fisherman.fish.entity.MemberEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberResponseDTO {
    private String id; // 아이디
    private String firstName; // 이름
    private String lastName; // 성

    public MemberResponseDTO(MemberRequestDTO m){
        id = m.getId();
        firstName = m.getFirstName();
        lastName = m.getLastName();
    }

    public MemberResponseDTO(MemberEntity m){
        id = m.getId();
        firstName = m.getFirstName();
        lastName = m.getLastName();
    }

    public static MemberResponseDTO toMemberDTO(MemberEntity memberEntity) {
        // TODO: toMemberDTO 완성
        return new MemberResponseDTO("id", "Jane", "Doe");
    }
}
