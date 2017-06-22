import { AsyncStorage } from 'react-native';

class Storage {
  get(key, callback) {
    // AsyncStorage.getItem(key, callback);
    // try {
    //   await AsyncStorage.getItem(key, callback);
    //   // if (value !== null){
    //   //   console.log(value);
    //   //   callback(value);
    //   // }
    // } catch (error) {
    //   console.error(error);
    // }
  }

  set(key, value, callback) {
    // AsyncStorage.setItem(key, value, callback);
    // try {
    //   await AsyncStorage.setItem(key, value, callback);
    // } catch (error) {
    //   console.error(error);
    // }
  }

  remove(key, callback) {
    // AsyncStorage.removeItem(key, callback);
    // try {
    //   await AsyncStorage.removeItem(key, callback);
    // } catch (error) {
    //   console.error(error);
    // }
  }
}

export const storage = new Storage();