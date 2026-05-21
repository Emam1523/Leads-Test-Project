package com.leads.sandbox.customException;

public class ConflictException extends RuntimeException {

    public ConflictException(String message) {
        super(message);
    }
}
