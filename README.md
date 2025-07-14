# ecommerce-react-native
# React Native Ecommerce App

A clean and modern **React Native Ecommerce** mobile app using **Redux Toolkit** for state management, and a custom design with static assets. Built to fetch product data, support cart functionality, and provide a smooth UI experience.


##  Features

-  Fetch products from [FakeStoreAPI](https://fakestoreapi.com/)
-  Product list with image, title, and price
-  Product details screen with description, rating, and image
-  Add to cart from list and detail screen
-  "Added" state for cart buttons
-  Cart screen with quantity control (+ / -)
-  Remove items from cart
-  Cart total calculation
-  Global cart count badge in the header
-  Search bar to filter products
-  Global loader using ActivityIndicator
-  Responsive UI with `react-native-responsive-screen`

---

##  Tech Stack

| Tool / Library            | Purpose                                |
|--------------------------|----------------------------------------|
| React Native             | Mobile app framework                   |
| Redux Toolkit            | Global state management                |
| React Redux              | React bindings for Redux               |
| FakeStoreAPI             | Mock API for product data              |
| React Navigation         | Navigation between screens             |
| React Native Responsive Screen | Responsive % layout               |
| TypeScript               | Type safety                            |

---

##  Folder Structure

```
.
├── components/          # Common reusable components (Header, Loader, etc.)
├── redux/               # Redux Toolkit slices (cart, loader)
├── screens/             # All app screens (Home, Details, Cart)
├── navigation/          # Navigation config and ref
├── theme/               # Colors, fonts, and static images
└── App.tsx              # Entry point
```

---

##  Getting Started

### 1. Prerequisites

- Node.js `>= 14`
- React Native CLI
- Android Studio / Xcode
- Git & NPM or Yarn

### 2. Clone the Repo

```bash
git clone https://github.com/JayeshPoriya/ecommerce-react-native.git
cd ecommerce-react-native
```

### 3. Install Dependencies

```bash
npm install
# or
yarn install
```

### 4. Run the App

```bash
npx react-native run-android
# or
npx react-native run-ios
```

---



