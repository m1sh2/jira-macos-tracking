import { StyleSheet, Dimensions } from 'react-native';

export const winWidth = Dimensions.get('window').width; //full width
export const winHeight = Dimensions.get('window').height; //full height

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    position: 'absolute',
    top: 3,
    left: 0,
    fontSize: 12,
    textAlign: 'center',
    margin: 0,
    padding: 0,
    width: winWidth,
    color: '#FFFFFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 20,
    height: winHeight - 20,
    width: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center'
  },
  login: {
    position: 'absolute',
    left: winWidth / 2 - 100,
    top: winHeight / 2 - 100,
    height: 200,
    width: 200,
    backgroundColor: '#cccccc'
  },
  buttonBody: {
    width: 100,
    height: 40,
    backgroundColor: '#999999',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bbbbbb',
    borderTopColor: '#eeeeee',
    borderBottomColor: '#555555',
    borderRadius: 10
  },
  buttonLabel: {
    fontSize: 16
  },
  input: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    padding: 5,
    height: 26,
    fontSize: 16,
    justifyContent: 'center'
  },
  label: {
    padding: 5
  },
  labelRow: {
    marginBottom: 10
  }
});