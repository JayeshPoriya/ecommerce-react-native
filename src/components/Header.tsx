import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import images from '../theme/Images';
import colors from '../theme/Colors';

interface HeaderProps {
  title: string;
  cartCount?: number;
  onCartPress?: () => void;
  showBack?: boolean;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  cartCount = 0,
  onCartPress,
  showBack = false,
  onBackPress,
}) => {
  return (
    <View style={styles.container}>
      {showBack ? (
        <TouchableOpacity onPress={onBackPress} style={styles.backBtn}>
          <Image source={images.back} style={styles.backIcon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onCartPress} style={styles.cartBtn}>
        <Image source={images.cart} style={styles.cartIcon} />
        {cartCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 65,
    backgroundColor: colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
  },
  backBtn: {
    padding: 8,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: colors.black,
  },
  placeholder: {
    width: 28, // same size as back/cart to keep title centered
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  cartBtn: {
    position: 'relative',
    padding: 8,
  },
  cartIcon: {
    width: 24,
    height: 24,
    tintColor: colors.black,
  },
  badge: {
    position: 'absolute',
    right: 2,
    top: 2,
    backgroundColor: colors.red,
    borderRadius: 8,
    minWidth: 16,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
  },
});
