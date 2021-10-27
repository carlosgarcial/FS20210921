package com.example.domains.entities.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.OneToMany;
import javax.validation.Valid;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;
import com.example.domains.entities.Film;
import com.example.domains.entities.FilmActor;
import com.example.domains.entities.FilmCategory;
import com.example.domains.entities.Language; 


@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDTO {
	
	@JsonProperty("id")
	private int filmId;
	@JsonProperty("titulo")
	private String title;
	@JsonProperty("descripcion")
	private String description;
	@JsonProperty("idioma")
	private int languageid;
	@JsonProperty("ultima_actualizacion")
	private Timestamp lastUpdate;
	@JsonProperty("duracion")
	private byte rentalDuration;
	@JsonProperty("rate")
	private BigDecimal rentalRate;
	@JsonProperty("coste")
	private BigDecimal replacementCost;
	@JsonProperty("actorespelis")
	private List<Integer> filmActors;
	@JsonProperty("categoriaspelis")
	private List<Integer> filmCategories;
	
	public static Film from(FilmDTO source) {
		Film peli = new Film(
				source.getFilmId(),
				source.getTitle(),
				source.getDescription(),
				new Language(source.getLanguageid()),
				source.getLastUpdate(),
				source.getRentalDuration(),
				source.getRentalRate(),
				source.getReplacementCost()
				);
		
		return peli;
	}

	public static FilmDTO from(Film source) {
		return new FilmDTO(
				source.getFilmId(),
				source.getTitle(),
				source.getDescription(),
				source.getLanguage().getLanguageId(),
				source.getLastUpdate(),
				source.getRentalDuration(),
				source.getRentalRate(),
				source.getReplacementCost(),
				source.getFilmActors().stream().map(item->item.getActor().getActorId()).collect(Collectors.toList()),
				source.getFilmCategories().stream().map(item->item.getCategory().getCategoryId()).collect(Collectors.toList())
				);
	}

	
	

}
