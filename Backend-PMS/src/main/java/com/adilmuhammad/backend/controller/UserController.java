package com.adilmuhammad.backend.controller;

import com.adilmuhammad.backend.exception.UserNotFoundException;
import com.adilmuhammad.backend.model.User;
import com.adilmuhammad.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/product")
    User newProduct(@RequestBody User newProduct) {
        return userRepository.save(newProduct);
    }

    @GetMapping("/products")
    List<User> getAllProducts() {
        return userRepository.findAll();
    }

    @GetMapping("/product/{id}")
    User getProductById(@PathVariable Integer id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/product/{id}")
    User updateProduct(@RequestBody User newProduct, @PathVariable Integer id) {
        return userRepository.findById(id)
                .map(product -> {
                    product.setProductName(newProduct.getProductName());
                    product.setDescription(newProduct.getDescription());
                    product.setPrice(newProduct.getPrice());
                    product.setStatus(newProduct.getStatus());
                    return userRepository.save(product);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/product/{id}")
    String deleteProduct(@PathVariable Integer id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "Product with id " + id + " has been deleted successfully.";
    }
}
