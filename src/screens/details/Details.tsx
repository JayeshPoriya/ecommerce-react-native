import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import styles from './Styles';
import images from '../../theme/Images';
import Header from '../../components/Header';
import { navigationRef } from '../../navigation/RootNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/CartSlice';
import { RootState } from '../../store';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Details: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.length;
  const route =
    useRoute<RouteProp<{ params: { product: Product } }, 'params'>>();
  const { product } = route.params;
  const isInCart = cartItems.some(item => item.id === product.id);

  const renderStars = (rate: number) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <View style={styles.stars}>
        {[...Array(fullStars)].map((_, i) => (
          <Image
            key={`full-${i}`}
            source={images.star}
            style={styles.starIcon}
          />
        ))}
        {hasHalfStar && (
          <Image source={images.halfStar} style={styles.starIcon} />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Image
            key={`empty-${i}`}
            source={images.emptyStar}
            style={styles.starIcon}
          />
        ))}
      </View>
    );
  };

  return (
    <>
      <Header
        title="Details"
        cartCount={cartCount}
        onCartPress={() => navigationRef.navigate('Cart')}
        showBack
        onBackPress={() => navigationRef.goBack()}
      />
      <ScrollView style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.ratingRow}>
            {renderStars(product.rating.rate)}
            <Text style={styles.ratingText}>
              {product.rating.rate.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              isInCart && { backgroundColor: '#ccc' }, // dimmed style if already added
            ]}
            disabled={isInCart}
            onPress={() => {
              if (!isInCart) dispatch(addToCart(product));
            }}
          >
            <Text style={styles.buttonText}>
              {isInCart ? 'Added' : 'Add to Cart'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Details;
