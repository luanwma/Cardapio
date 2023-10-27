package com.example.cardapio.model.food;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "foods")
@Entity(name = "foods")
@Getter // roda em runtime todos os getters
@NoArgsConstructor // roda em runtime um construtor sem argumentos
@AllArgsConstructor // roda em runtime um construtor com todos  argumentos
@EqualsAndHashCode(of  = "id")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String image;
    private double price;


    public Food(FoodRequestDTO data){
        this.title = data.title(); // esses metodos não foram criados por mim, eles são criados pelo
        this.image = data.image(); // record, por isso que os objetos de transferencia de dados são record
        this.price = data.price(); // cria automaticamente em runtime os metodos
    }
}
