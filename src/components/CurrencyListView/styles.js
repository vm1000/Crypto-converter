import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  green: {
    color: '#32cd32'
  },
  red: {
    color: '#ff4500'
  },
  percentChange: {
    fontSize: 15,
    padding: 10,
    marginTop: 20
  },
  cryptoConverterView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  imageBackgroundForPrices: {
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: -30,
    borderWidth: 5,
    borderColor: 'silver',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 10
  },
  headingForCriptoPrices: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    height: 30,
    borderRadius: 60,
    borderColor: 'grey',
    borderWidth: 1,
    overflow: 'hidden',
    width: '100%',
    marginTop: 10,
    zIndex: 5,
  },
  exchangeHeadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
  },
  textForHeading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 15,
    color: 'navy',
    marginLeft: 20,
  },
  cryptoExchangeSymbolView: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 0.5,
    marginTop: -20
  },
  cryptoExchangeSymbolText: {
    fontSize: 15,
    color: 'white',
    width: 80,
    padding: 10,
    marginTop: 20
  },
  cryptoExchangePriceChangelView: {
    width: '100%',
    fontSize: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  cryptoExchangePriceText: {
    textAlign: 'right',
    fontSize: 15,
    color: 'white',
    padding: 10,
    width: 110,
    marginLeft: 10,
    marginTop: 20
  },
})
