import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {COLORS, FONTS} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../components/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../components/CartItem';
import CustomButton from '../components/CustomButton';

export default function Cart() {
  const navigation = useNavigation();
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCart = async () => {
      const list = await AsyncStorage.getItem('cartList');
      if (list?.length) {
        setCart(JSON.parse(list));
      } else {
        setCart(null);
      }
    };

    getCart();
  }, [refresh]);

  useEffect(() => {
    if (cart?.length) {
      let sum = 0;
      cart.forEach(product => {
        sum += product.price * product.count;
      });

      setPrice(sum);
    }
  }, [cart, refresh]);
  return (
    <View style={globalStyles.container}>
      <ImageBackground style={globalStyles.container}>
        <Header />

        {cart && cart.length ? (
          <>
            <ScrollView
              style={globalStyles.flex}
              contentContainerStyle={styles.main}>
              {cart.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}

              <View style={globalStyles.row}>
                <Text style={styles.sumTitle}>Сума к оплате:</Text>
                <Text style={styles.sum}>{price} $</Text>
              </View>

              <CustomButton
                text={'Заказать'}
                style={{marginTop: Dimensions.get('window').height * 0.3}}
                onPress={() =>
                  navigation.navigate('DrawerNavigator', {
                    screen: 'CartSuccess',
                  })
                }
              />
            </ScrollView>
          </>
        ) : (
          <>
            <Text style={styles.empty}>Корзина {'\n'} пуста...</Text>

            <CustomButton
              text={'Заказать'}
              style={{marginTop: Dimensions.get('window').height * 0.3}}
              onPress={() =>
                navigation.navigate('DrawerNavigator', {
                  screen: 'Main',
                })
              }
            />
          </>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingBottom: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  empty: {
    textAlign: 'center',
    fontFamily: FONTS.bold,
    color: COLORS.main,
    fontSize: 40,
    marginTop: Dimensions.get('window').height * 0.1,
    backgroundColor: COLORS.textBackground,
    paddingVertical: 30,
  },
  sumTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    marginTop: 40,
  },
  sum: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    marginTop: 40,
  },
});
