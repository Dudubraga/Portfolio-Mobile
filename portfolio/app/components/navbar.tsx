import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Navbar() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/')}>
                <Text style={styles.button}>Sobre Mim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/projects')}>
                <Text style={styles.button}>Projetos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/skills')}>
                <Text style={styles.button}>Habilidades</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/contact')}>
                <Text style={styles.button}>Contato</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eaf6ffff',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        bottom: 0,
        width: '100%',
    },
    button: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#12355bff',
    },
});