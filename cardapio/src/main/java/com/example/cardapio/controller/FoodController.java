package com.example.cardapio.controller;

import com.example.cardapio.model.food.Food;
import com.example.cardapio.model.food.FoodRepository;
import com.example.cardapio.model.food.FoodRequestDTO;
import com.example.cardapio.model.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//indicar para o spring que é um controller @RestController
// para mapear controle de food usa a notação @RequestMapping("food")
// mapear endpoint

@RestController
@RequestMapping("food")
public class FoodController {

    //quando for chamado o metodo get da API vai chamar o metodo abaixo
    // que irá buscar todas as foods
    // quando criar a classe foodcontroller é preciso injetar as dependencias
    // e para injetar as dependencias usa @Autowired
    // FoodRepository é uma interface e interface não são instanciaveis, logo não funciona
    // FoodRepository rep = new FoodRepository(), para isso funcionar é preciso injetar dependencias
    //
    @Autowired
    private FoodRepository repository;

    //criando rota get para buscar foods
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO>  getAll(){
        List<FoodResponseDTO> foodList = repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }

    //criando rotas post
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data){
        Food foodData = new Food(data);
        repository.save(foodData);

    }






}
