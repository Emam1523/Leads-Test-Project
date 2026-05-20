package com.leads.sandbox.config;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

/**
 * A lenient deserializer that accepts either a date (yyyy-MM-dd) or a date-time (ISO_LOCAL_DATE_TIME / offset)
 * and converts it to a LocalDate. This helps when clients send timestamps for fields that are modeled as
 * java.time.LocalDate on the server.
 */
public class LenientLocalDateDeserializer extends StdDeserializer<LocalDate> {

    public LenientLocalDateDeserializer() {
        super(LocalDate.class);
    }

    @Override
    public LocalDate deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        String text = p.getText();
        if (text == null || text.isBlank()) {
            return null;
        }

        text = text.trim();

        // Try plain date first
        try {
            return LocalDate.parse(text, DateTimeFormatter.ISO_LOCAL_DATE);
        } catch (DateTimeParseException ignored) {
        }

        // Try local date-time
        try {
            LocalDateTime ldt = LocalDateTime.parse(text, DateTimeFormatter.ISO_LOCAL_DATE_TIME);
            return ldt.toLocalDate();
        } catch (DateTimeParseException ignored) {
        }

        // Try offset date-time (e.g., 2026-05-13T14:30:43.288475+06:00 or Z)
        try {
            OffsetDateTime odt = OffsetDateTime.parse(text, DateTimeFormatter.ISO_OFFSET_DATE_TIME);
            return odt.toLocalDate();
        } catch (DateTimeParseException ignored) {
        }

        // Fallback: try parsing as epoch millis (number)
        try {
            long epoch = Long.parseLong(text);
            return LocalDate.ofEpochDay(epoch / (24L * 60L * 60L * 1000L));
        } catch (Exception ignored) {
        }

        // Give up — let Jackson report a more descriptive error
        throw new IOException("Unable to parse LocalDate from '" + text + "'");
    }
}

