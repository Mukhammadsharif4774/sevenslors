import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from './GlobalContext';
import {COLORS, FONTS} from '../helpers/colors';

export default function MenuItem({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const [carts, setCarts] = useState([]);

  const add = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (!existProduct) {
        cartArray.push({...product, count: 1});
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push({...product, count: 1});
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }
    await setRefresh(!refresh);
  };

  const trash = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(cart => cart.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }
    await setRefresh(!refresh);
  };

  const define = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        await trash(product);
      } else {
        await add(product);
      }
    } else {
      await add(product);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList) {
        const cartArray = JSON.parse(cartList);
        const existProduct = cartArray.find(cart => cart.name === item.name);
        if (existProduct) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      } else {
        setAdded(false);
      }
    };

    getProduct();
  }, [refresh]);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCarts(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  const deleteItem = async () => {
    if (carts?.length) {
      const newArray = carts.filter(product => product.name !== item.name);
      await setCarts(newArray);
      await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      await setRefresh(!refresh);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={item?.image} style={styles.image} />

        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.desc}>{item?.description}</Text>

          <View style={styles.row}>
            {added ? (
              <TouchableOpacity
                style={styles.statusContainer}
                onPress={() => deleteItem()}>
                <Text style={styles.status}>УБРАТЬ</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.statusContainer}
                onPress={() => define(item)}>
                <Text style={styles.status}>КУПИТЬ</Text>
              </TouchableOpacity>
            )}

            <View style={styles.priceContainer}>
              <Text style={styles.price}>{item?.price} $</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '48%',
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 12,
    alignSelf: 'center',
    height: 300,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    objectFit: 'fill',
  },
  rightContainer: {
    width: '100%',
  },
  rightFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
  },
  currencyText: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    textAlign: 'left',
    height: 45,
  },
  desc: {
    fontSize: 12,
    fontFamily: FONTS.light,
    color: COLORS.black,
    textAlign: 'left',
    height: 50,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  statusContainer: {
    backgroundColor: COLORS.main,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  status: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.main,
  },
  price: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },
});
