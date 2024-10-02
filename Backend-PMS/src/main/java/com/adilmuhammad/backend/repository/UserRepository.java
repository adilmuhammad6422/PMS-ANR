package com.adilmuhammad.backend.repository;

import com.adilmuhammad.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
