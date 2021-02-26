package com.hth.hollywoodtowerhotelangularspringboot.config;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableJpaRepositories("com.hth.hollywoodtowerhotelangularspringboot.repository")
@EnableTransactionManagement
public class DatabaseConfig {

}
