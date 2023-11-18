import React, { useEffect, useState }  from "react";
import { Container, TextTimer, Timer, TipContainer, TipText, TipTitle, Title } from "./styled";
import bombImg from "../../assets/bomba.png";
import { ImageBackground } from "react-native";
import PasswordInput from "../../components/PasswordInput";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import BombService from "../../services/BombApp"
import api from "../../services/api/api";

export default function Routes() {
    const navigation = useNavigation();
    const [started, setStarted] = useState(false);
    const [pin, setPin] = useState(["", "", ""]);
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("03");
    const [seconds, setSeconds] = useState("00");

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [intervalId, setIntervalId] = useState();

    function handleStartGame() {
      BombService.bombStartGame({ setStarted, hours, minutes, seconds })
    }

    function handleDisarmBomb() {
      BombService.disarmBomb({ setStarted, answer, navigation, pin, setPin, intervalId });
    }

    function handleGiveUp() {
      BombService.giveUpGame({ intervalId, navigation })
    }

    async function fetchQuestion() {
      const randomNumber = Math.floor(Math.random() * 6 + 1);
    
      const { data } = await api.get(`questions/${randomNumber}`);
    
      setQuestion(data?.pergunta);
      setAnswer(data?.resp);
    }

    useEffect(() => {
      fetchQuestion();
    }, []);


    function handleNavToStart() {
        navigation.navigate("Start");
    }

    function handleStartBomb() {
      const diffTime = BombService.getDiffTime({ hours, seconds, minutes });
  
      BombService.startCountdown({
        setSeconds,
        setMinutes,
        setHours,
        setStarted,
        diffTime,
        setIntervalId,
        intervalId,
        navigation,
      });
    }

    useEffect(() => {
      if (started) {
        handleStartBomb();
      }
    }, [started]);

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
                {hours} : {minutes} : {seconds}
              </TextTimer>
            </Timer>
          </ImageBackground>
          
          {!started ? null : (
            <TipContainer>
              <TipTitle>Sua dica:</TipTitle>
              <TipText>{question}</TipText>
              <TipText>{answer}</TipText>
          </TipContainer>
          )}

        <PasswordInput pin={pin} setPin={setPin} started={started} />

        {!started ? (
          <>
          <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />

          <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart} />
          </>
        ) : (
          <>
          <ButtonComponent buttonText="Desarmar" handlePress={handleDisarmBomb} />

          <ButtonComponent buttonText="Desistir" handlePress={handleGiveUp} />
          </>
        )}
          
        </Container>
    );
}