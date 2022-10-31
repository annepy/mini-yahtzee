import { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';

let board = [];
const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 3;
const WINNING_POINTS = 63;


export default function Gameboard() {

    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [sum, setSum] = useState(0);
    /* const [diceSum, setDiceSum] = useState(0); */
    const [status, setStatus] = useState("");
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));

    const row = [];
    for (let i = 0; i < NBR_OF_DICES; i++) {
        row.push(
            <Pressable
            key={"row" + i}
            onPress={() => {{selectDice(i)}}}>
                <MaterialCommunityIcons
                    name={board[i]}
                    key={"row" + i}
                    size={60}
                    color={getDiceColor(i)}>
                </MaterialCommunityIcons>
            </Pressable>
        );
    }

    useEffect(() => {
        checkWinner();
        if (nbrOfThrowsLeft === NBR_OF_THROWS) {
            setStatus('Game has not started!')
        }
        if (nbrOfThrowsLeft < 0) {
            setNbrOfThrowsLeft(NBR_OF_THROWS-1);
        }
    }, [nbrOfThrowsLeft])

    function getDiceColor(i) {
        if (board.every((val, i, arr) => val === arr[0])) {
        }
        else {
            return selectedDices[i] ? "#b4cf95" : "#548326";
        }
    }
    
    function selectDice(i) {
        let dices = [...selectedDices];
        dices[i] = selectedDices[i] ? false : true;
        setSelectedDices(dices);
    }

    const checkWinner = () => {
        if (sum >= WINNING_POINTS && nbrOfThrowsLeft > 0) {
            setStatus('You won!');
        }
        else if (sum >= WINNING_POINTS && nbrOfThrowsLeft === 0) {
            setStatus('You won, game is over!');
        }
        else if (nbrOfThrowsLeft === 0) {
            setStatus('Game over');
        }
        else {
            setStatus('Keep on throwing!');
        }
    }

    const throwDices = () => {
        let sum = 0;
        for (let i = 0; i < NBR_OF_DICES; i++) {
            if(!selectedDices[i]) {
                let randomNumber = Math.floor(Math.random() * 6 + 1);
                board[i] = 'dice-' + randomNumber;
                sum += randomNumber;
        }
    }
            setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
            setSum(sum);
    }

    /* const countDices = () => {
        let diceSum = 0;
        for(let i = 0; i < array.length; ++i){
            if(array[i] == 1, 2, 3, 4, 5, 6)
                diceSum++;
            }
            setDiceSum(diceSum);
    } */

    return(
        <View style={styles.gameboard}>
            <View style={styles.flex}>{row}</View>

            <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
            <Text style={styles.gameinfo}>{status}</Text>

            <Pressable style={styles.button}
            onPress={() => throwDices()}>
                <Text style={styles.buttonText}>Throw dices</Text>
            </Pressable>

            <Text style={styles.gameinfo}>Total: {sum}</Text>
            
            {/* <Text style={styles.gameinfo}>Ones: {diceSum}</Text> */}
            

        </View>
    )

}
