import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6efdb'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#548326',
    flexDirection: 'row',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#548326',
    flexDirection: 'row'
  },
  title: {
    color: '#e6efdb',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#e6efdb',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#e6efdb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#e6efdb',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#548326",
    width: 150,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#e6efdb",
    fontSize: 20
  }
});