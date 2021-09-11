package com.devsuperior.dsvendas.repositories;

import com.devsuperior.dsvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsvendas.repositories.SaleRepository;


public interface SaleRepository extends JpaRepository<Sale,Long> {
    
}
