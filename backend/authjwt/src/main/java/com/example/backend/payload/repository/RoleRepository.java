package com.example.backend.payload.repository;

import com.example.backend.models.ERole;
import com.example.backend.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
