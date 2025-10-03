# Cabalyze 🚗 💰

<div align="center">
  <img src="assets/images/logo.png" alt="Cabalyze Logo" width="200">
  <h3>Your Smart Ride Price Comparison Platform</h3>
  <p>Compare ride prices across multiple services instantly</p>
</div>
## 🌟 Overview

Cabalyze is a modern web application that helps users make informed decisions about their rides by comparing prices across multiple ride-hailing services in real-time. Built with React, TypeScript, and Google Maps integration, our platform provides a seamless experience for finding the best ride prices.

### Key Features

- **Real-time Price Comparison**: Compare prices across Uber, Ola, and Rapido
- **Interactive Map Interface**: Powered by Google Maps API
- **Smart Location Input**: Address autocomplete and current location detection
- **Surge Price Detection**: Real-time surge pricing information
- **Route Visualization**: View routes with distance and ETA
- **One-Click Booking**: Direct redirection to service providers
- **Responsive Design**: Works seamlessly across all devices

## 🛠️ Technical Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React Context API
- **Maps**: Google Maps JavaScript API & Places API
- **Build Tool**: Vite

### APIs & Services
- **Maps & Geocoding**: Google Maps Platform
- **Ride Services**: 
  - Uber Rides API
  - Ola API

### Development Tools
- **Language**: TypeScript 5.0+
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier
- **Testing**: Jest & React Testing Library
- **API Testing**: Postman collections included

## 📋 Prerequisites

Before setting up Cabalyze, ensure you have:

- Node.js (v16.0.0 or higher)
- npm or yarn package manager
- Google Maps API key with following APIs enabled:
  - Maps JavaScript API
  - Places API
  - Directions API
  - Geocoding API

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhinakaranst/Cabalyze.git
   cd Cabalyze
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   VITE_UBER_CLIENT_ID=your_uber_client_id
   VITE_OLA_API_KEY=your_ola_api_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
Cabalyze/
├── src/
│   ├── components/          # React components
│   │   ├── Map/            # Map related components
│   │   ├── Search/         # Search & autocomplete
│   │   └── UI/             # Common UI components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API integration services
│   ├── utils/              # Helper functions
│   ├── types/              # TypeScript definitions
│   ├── App.tsx            # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── tests/               # Test files
└── docs/                # Additional documentation
```

## 🔧 Configuration

### Google Maps

1. Create a project in Google Cloud Console
2. Enable required APIs (Maps JavaScript, Places, Directions, Geocoding)
3. Create API credentials
4. Add restrictions to API key
5. Update `.env` file with your key

### Ride Service APIs

Configure each ride service API in the `.env` file. Refer to their respective documentation:
- [Uber API Documentation](https://developer.uber.com/docs)
- [Ola API Documentation](https://developers.olacabs.com)
- [Rapido API Documentation](https://rapidoapi.com/docs)

## 🧪 Testing

Run tests using:
```bash
npm run test        # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## 📦 Deployment

1. Build the project
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service
   - Recommended: Vercel, Netlify, or GitHub Pages
   - Enable environment variables in your hosting platform

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Maps Platform for mapping services
- All ride-hailing services for their APIs
- The open-source community for inspiration and tools

## 📞 Support

For support, email dhinakarant104@gmail.com.

---

<div align="center">
  Made with our modern web technologies • Optimized for performance • Open source
</div>
