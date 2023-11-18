import React from "react";
import { Container, Logo, SucessImg, Title } from "./styles";

import logoImg from "../../assets/icon.png";
import sucessImg from "../../assets/bomba_cortada_matrix.png";
import ButtonComponent from "../../components/Buttons";

export default function Disarmed() {
    function handleNavToStart() {
        navigation.navigate("Start");
    }
    
    return (
        <Container>
          <Logo source={logoImg} style={{ resizeMode: "contain" }} />
          <Title>Parabéns!!!{"\n"}Você desarmou</Title>
          <SucessImg source={sucessImg} style={{ resizeMode: "contain" }} />
          <ButtonComponent
            buttonText={"Página incial"}
            handlePress={handleNavToStart}
          />
        </Container>
    );
}