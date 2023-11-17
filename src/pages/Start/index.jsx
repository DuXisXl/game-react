import React from "react";
import {Container, Logo} from './styles'

export default function Start() {
   const handleNavToPlayAlone = () => {
    console.log("teste de play-alone")
   };
   const handleNavToPlayTogether = () => {
    console.log("teste de play-together")
   };
   const handleNavToRules = () => {
    console.log("teste de rules")
   };
   
  return <Container>
    <Logo
      source={require("../../assets/icon.png")}
      style={{ resizeMode: "contain" }}
    />
    <Title>Bem-vindo ao {"\n"} Bomb game</Title>
    <SubTitle>Escolha um modo de jogo.</SubTitle>
    <ButtonComponent
        buttonText={"Jogar Solo"}
        handlePress={handleNavToPlayAlone}
      />
      <ButtonComponent
        buttonText={"Jogar Em Dupla"}
        handlePress={handleNavToPlayTogether}
      />
    <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
  </Container>;
}