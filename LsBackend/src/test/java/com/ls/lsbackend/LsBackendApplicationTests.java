package com.ls.lsbackend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest
class LsBackendApplicationTests {

    @Test
    void contextLoads() {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        System.out.println(passwordEncoder.encode("kexin1337"));
        System.out.println(passwordEncoder.encode("kexin1337"));
        System.out.println(passwordEncoder.encode("kexin1337"));

        System.out.println(passwordEncoder.matches("kexin1337", "$2a$10$DapUZldkZYG2TSU7D0xa2epwRraJK0.LeCmkcMkhJr4yFikzbSlXm"));
        System.out.println(passwordEncoder.matches("kexin1337", "$2a$10$bLjsmK0nd5f.ktdLacAsaeRd3Lx8nE87HLUJcJQ9hW4ZA2v06/y5e"));
        System.out.println(passwordEncoder.matches("kexin1337", "$2a$10$aU1Nm6Il3sizX.cOxg1u/OfsrWcTRBsn/0RcI.XeIMQqcqvHbJg0O"));

    }
}
