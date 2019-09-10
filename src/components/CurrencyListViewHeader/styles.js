import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: 'silver',
    borderRadius: 20,
  },
  coinText: {
    fontSize: 15,
    width: 80,
    color: 'white',
  },
  changeText: {
    fontSize: 15,
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  valueText: {
    fontSize: 15,
    textAlign: 'right',
    width: 110,
    color: 'white'
  }
})
