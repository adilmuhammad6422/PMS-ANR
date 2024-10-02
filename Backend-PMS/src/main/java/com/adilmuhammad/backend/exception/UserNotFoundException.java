package com.adilmuhammad.backend.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Integer id) {
        super("Could not find the product with id " + id);
    }
}
