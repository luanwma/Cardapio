package com.example.cardapio.model.food;

public record FoodResponseDTO(Long id, String title, String image, double price) {

    public FoodResponseDTO(Food food){
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());

    }

}
