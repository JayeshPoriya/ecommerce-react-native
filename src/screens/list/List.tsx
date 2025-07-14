import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import Header from '../../components/Header';
import { navigationRef } from '../../navigation/RootNavigation';
import { getProducts } from '../../config/ApiCall';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/CartSlice';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const List: React.FC = () => {
  const dispatch = useDispatch();
  const { productsList } = useSelector(state => state?.list);
  const cartCount = useSelector((state: RootState) => state.cart.items.length);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('List.Js getProducts(): useEffect');
    getProducts(dispatch);
  }, []);

  useEffect(() => {
    setProducts(productsList);
    setFiltered(productsList);
  }, [productsList]);

  const handleSearch = (text: string) => {
    setSearch(text);
    const results = products.filter(product =>
      product.title.toLowerCase().includes(text.toLowerCase()),
    );
    setFiltered(results);
  };

  const renderItem = ({ item }: { item: Product }) => {
    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

    return (
      <TouchableOpacity
        onPress={() => navigationRef.navigate('Details', { product: item })}
      >
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.price}>${item.price}</Text>

          <TouchableOpacity
            onPress={() => {
              if (!isInCart) dispatch(addToCart(item));
            }}
            style={[
              styles.addButton,
              isInCart && { backgroundColor: '#ccc' }, // visually disable
            ]}
            disabled={isInCart}
          >
            <Text style={styles.addButtonText}>
              {isInCart ? 'Added' : 'Add to cart'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="E-commerce App"
        cartCount={cartCount}
        onCartPress={() => navigationRef.navigate('Cart')}
      />

      <TextInput
        style={styles.search}
        placeholder="Search"
        value={search}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={renderItem}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
};

export default List;
