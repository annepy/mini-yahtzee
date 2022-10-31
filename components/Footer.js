import { Text, View } from "react-native";
import styles from '../style/style';


export default function Header() {
return(
    <View style={styles.footer}>
        <Text style={styles.author}>
            Author: Anne Pyykkönen
        </Text>
    </View>
    )
}