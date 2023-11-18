import React from 'react'
import { BombMessage, Container, Title } from './styled';
import InputTimer from '../../components/PlayTogether/inputTimer';
import TipInput from '../../components/PlayTogether/TipInput';
import { Input } from '../../components/PlayTogether/InputPassword/styled';
import InputPassword from '../../components/PlayTogether/InputPassword';
import ButtonComponent from '../../components/Buttons'
import { useNavigation } from '@react-navigation/native';

export default function PlayTogether() {
    const navigation = useNavigation();

    function handleNavToStart() {
      navigation.navigate("Start");
    }
    
    function handleStartGame() {
      Alert.alert("O jogo começou")
    }

    return (
        <Container>
          <Title>Bomb Game Dupla</Title>
          <InputTimer></InputTimer>
          <BombMessage>Mensagem de Erro Temporaria!</BombMessage>
          <TipInput></TipInput>
          <InputPassword></InputPassword>
          <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />
          <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart} />
        </Container>
    );
}