import React  from "react";
import { Container, TextTimer, Timer, TipContainer, TipText, TipTitle, Title } from "./styled";
import bombImg from "../../assets/bomba.png";
import { ImageBackground } from "react-native";
import PasswordInput from "../../components/PasswordInput";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function Routes() {
    const navigation = useNavigation();

    function handleNavToStart() {
        navigation.navigate("Start");
    }
    
    function handleStartGame() {
      navigation.navigate("Start")
    }
    return (
        <Container>
          <Title>Bomb Game Solo</Title>
          <ImageBackground
            source={bombImg}
            resizeMode="cover"
            style={{
              marginTop: 50,
              minHeight: 130,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Timer>
              <TextTimer>
                00 : 05 : 00
              </TextTimer>
            </Timer>
          </ImageBackground>
          <TipContainer>
            <TipTitle>Sua dica:</TipTitle>
            <TipText>Dica vai estar aqui!</TipText>
        </TipContainer>

        <PasswordInput  />

            <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />

            <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart} />
        </Container>
    );
}