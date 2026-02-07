package com.malavika.inventory.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "landing_content")
public class LandingContent {

    @Id
    private String id;

    private String headline;
    private String subheadline;
    private String description;
    private String ctaText;
    private String ctaLink;
    private String mediaUrl;

    private List<String> navLinks; // e.g., ["Features", "Pricing"]
private String navbarBtnText;

    // ===== GETTERS =====
    public String getId() {
        return id;
    }

    public String getHeadline() {
        return headline;
    }

    public String getMediaUrl() {
        return mediaUrl;
    }

    public String getSubheadline() {
        return subheadline;
    }

    public String getDescription() {
        return description;
    }

    public String getCtaText() {
        return ctaText;
    }

    public String getCtaLink() {
        return ctaLink;
    }
    public List<String> getNavLinks() { 
        return navLinks; }

    public String getNavbarBtnText() { 
        return navbarBtnText; }

    

    // ===== SETTERS =====
    public void setId(String id) {
        this.id = id;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public void setSubheadline(String subheadline) {
        this.subheadline = subheadline;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCtaText(String ctaText) {
        this.ctaText = ctaText;
    }

    public void setCtaLink(String ctaLink) {
        this.ctaLink = ctaLink;
    }

    public void setMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
    }

    public void setNavLinks(List<String> navLinks) { 
        this.navLinks = navLinks; }
        
    public void setNavbarBtnText(String navbarBtnText) { 
        this.navbarBtnText = navbarBtnText; }
}
