package com.leads.sandbox.common.json;

import java.util.Map;

/**
 * Helper for converting a primitive value or a lookup object into a String.
 *
 * Supported inputs:
 * - "123"
 * - 123
 * - {"id":123,"label":"Dhaka"}
 * - {"code":"BD","name":"Bangladesh"}
 * - {"key":"21","value":"Dhaka"}
 */
public final class LookupValueNormalizer {


    public static String normalize(Object rawValue) {
        if (rawValue == null) {
            return null;
        }

        if (rawValue instanceof String s) {
            return s.isBlank() ? null : s;
        }

        if (rawValue instanceof Number || rawValue instanceof Boolean) {
            return String.valueOf(rawValue);
        }

        if (rawValue instanceof Map<?, ?> map) {
            String[] preferredFields = {"id", "key", "code", "value", "name", "label"};
            for (String field : preferredFields) {
                Object candidate = map.get(field);
                if (candidate != null) {
                    String text = String.valueOf(candidate);
                    if (!text.isBlank()) {
                        return text;
                    }
                }
            }
        }

        String text = String.valueOf(rawValue);
        return text.isBlank() ? null : text;
    }
}



