package com.stacksprint.user_service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserServiceApplicationTests {
	@Autowired
	private MockMvc mockMvc; //This acts like 'Supertest' or 'TestClient'

	@Test
    void shouldReturnUsers() throws Exception {
        // Arrange, Act & Assert
		mockMvc.perform(get("/api/users"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.message").value("User service is running!"))
               .andExpect(jsonPath("$.totalUsers").value(99));
    }


	@Test
	void contextLoads() {
	}

}
