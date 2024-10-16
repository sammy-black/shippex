# Shipment Tracking App

This is a simple shipment tracking app built using [React Native](https://reactnative.dev/), [Expo](https://expo.dev/), and the [Expo File Router](https://expo.github.io/router/). The app allows drivers to manage their shipment status in real-time, including updating the status of shipments and viewing key details about each delivery.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Test Credentials](#test-credentials)
- [Technologies Used](#technologies-used)

## Prerequisites

Before running the app, ensure you have the following tools installed on your machine:

- Node.js (v14.x or later)
- Expo CLI (`npm install -g expo-cli`)
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sammy-black/shippex.git

   ```

2. Navigate to the project directory:

   ```bash
   cd shippex

   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

# Running the App

1. Start the Expo development server:

   ```bash
   expo start

   ```

2. Use the QR code from the terminal or browser to open the app on an Expo Go-enabled device or simulator (iOS/Android).

3. You can also run the app directly on a simulator by choosing the respective platform (Android or iOS) from the Expo browser window.

Test Credentials
To explore the app, you can log in using the following test credentials:

- **Email**: test@brandimic.com
- **Password**: testy123@

Feel free to use this account to test the app's functionality.

# Technologies Used

- **React Native:** Framework for building native apps using React.
- **Expo:** A framework and platform for universal React applications.
- **Expo File Router:** File-based routing to manage navigation between screens.
- **React Hook Form:** For managing form state and validation.
- **Yup:** For schema validation in forms.
- **Styled Components:** For styling React components using tagged template literals.
- **React Native Reanimated:** For handling animations in the app.
- **Expo Checkbox:** Used for selecting and managing multiple shipments.
- **Axios:** For making HTTP requests to fetch and manipulate shipment data.

# Environment Variables
The project uses environment variables to manage sensitive information and configuration.

Location: .env file in the root directory.
Usage: Access variables using process.env.VARIABLE_NAME.
