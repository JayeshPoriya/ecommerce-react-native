// Styles.ts
import { StyleSheet } from 'react-native';
import colors from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 12,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.black,
  },
  price: {
    marginVertical: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  removeButton: {
    alignSelf: 'flex-start',
    backgroundColor: colors.red,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  removeButtonText: {
    color: colors.white,
    fontWeight: '600',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: colors.gray,
    paddingTop: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  checkoutText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 24,
    color: colors.gray,
  },
});

export default styles;
