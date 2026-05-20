package com.leads.sandbox.address.query;

public class RetrieveLookup {
    private Long id;
    private String label;
    private String key;
    private String value;

    public RetrieveLookup(Long id, String label) {
        this.id = id;
        this.label = label;
        this.key = id == null ? null : id.toString();
        this.value = label;
    }

    public Long getId() { return id; }
    public void setId(Long id) {
        this.id = id;
        this.key = id == null ? null : id.toString();
    }

    public String getLabel() { return label; }
    public void setLabel(String label) {
        this.label = label;
        this.value = label;
    }

    public String getKey() { return key; }
    public void setKey(String key) { this.key = key; }

    public String getValue() { return value; }
    public void setValue(String value) { this.value = value; }
}
