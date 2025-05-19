import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';
import { generatePassword, checkGuess } from '../scripts/password-game.logic';
import { useRouter } from "expo-router";

export default function PasswordGame() {
    const router = useRouter();
    const [password, setPassword] = useState(generatePassword());
    const [guess, setGuess] = useState('');
    const [history, setHistory] = useState<
        { guess: string; correctPosition: number; correctDigit: number }[]
    >([]);
    const [revealed, setRevealed] = useState(false);

    const handleGuess = () => {
        if (guess.length !== 4 || !/^\d{4}$/.test(guess)) {
            Alert.alert('Digite uma senha de 4 dígitos.');
            return;
        }
        const result = checkGuess(password, guess);
        setHistory([{ guess, ...result }, ...history]);
        setGuess('');
        if (result.correctPosition === 4) {
            Alert.alert('Parabéns!', 'Você acertou a senha!');
            setRevealed(true);
        }
    };

    const handleGiveUp = () => {
        setRevealed(true);
    };

    const handleRestart = () => {
        setPassword(generatePassword());
        setGuess('');
        setHistory([]);
        setRevealed(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.push('/(tabs)/projects')}
            >
              <Text style={styles.backButtonText}>← Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Jogo da Senha</Text>
            <TextInput
                style={styles.input}
                value={guess}
                onChangeText={setGuess}
                keyboardType="number-pad"
                maxLength={4}
                placeholder="Digite seu palpite"
                editable={!revealed}
            />
            <TouchableOpacity
                style={[styles.button, revealed && styles.buttonDisabled]}
                onPress={handleGuess}
                disabled={revealed}
            >
                <Text style={styles.buttonText}>Enviar Palpite</Text>
            </TouchableOpacity>
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={[styles.button, revealed && styles.buttonDisabled]}
                    onPress={handleGiveUp}
                    disabled={revealed}
                >
                    <Text style={styles.buttonText}>Desistir</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleRestart}
                >
                    <Text style={styles.buttonText}>Recomeçar</Text>
                </TouchableOpacity>
            </View>
            {revealed && (
                <Text style={styles.revealed}>Senha: {password}</Text>
            )}
            <Text style={styles.historyTitle}>Histórico:</Text>
            <FlatList
                data={history}
                keyExtractor={(_, idx) => idx.toString()}
                renderItem={({ item, index }) => (
                    <Text style={styles.historyItem}>
                        {history.length - index}: {item.guess} — {item.correctPosition} na posição certa, {item.correctDigit} na posição errada
                    </Text>
                )}
                ListEmptyComponent={
                    <Text style={styles.historyItem}>Nenhum palpite ainda.</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 24, 
        backgroundColor: '#12355bff',
    },
    title: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        marginBottom: 16, 
        textAlign: 'center', 
        color: '#eaf6ffff',
    },
    input: { 
        borderWidth: 1, 
        borderColor: '#eaf6ffff', 
        borderRadius: 8, 
        padding: 12, 
        fontSize: 20, 
        marginBottom: 12, 
        textAlign: 'center',
        color: '#eaf6ffff',
    },
    buttonRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginVertical: 12 
    },
    button: { 
        backgroundColor: '#eaf6ffff',
        borderRadius: 8, 
        paddingVertical: 10,
        paddingHorizontal: 24,
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: 'center',
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    buttonText: {
        color: '#12355bff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    revealed: { 
        fontSize: 20, 
        color: 'red', 
        textAlign: 'center', 
        marginVertical: 8 
    },
    historyTitle: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginTop: 16,
        color: '#eaf6ffff', 
    },
    historyItem: { 
        fontSize: 16, 
        marginVertical: 2,
        color: '#eaf6ffff',
    },
    backButton: {
      alignSelf: 'flex-start',
      marginTop: 20,
      marginBottom: 5,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    backButtonText: {
      color: '#eaf6ffff',
      fontSize: 16,
    },
});