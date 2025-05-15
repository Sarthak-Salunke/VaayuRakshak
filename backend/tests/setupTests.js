const mongoose = require('mongoose');
const UserLocation = require('../models/UserLocation');

beforeAll(async () => {
  // Connect to test database
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  // Clear existing user locations
  await UserLocation.deleteMany({});

  // Add test user locations within 1 km radius of test point
  const testUsers = [
    {
      phoneNumber: '+911234567890',
      location: { lat: 12.9716, lng: 77.5946 }, // Bangalore approx
    },
    {
      phoneNumber: '+919876543210',
      location: { lat: 12.9720, lng: 77.5940 }, // very close to above
    },
  ];

  await UserLocation.insertMany(testUsers);
});

afterAll(async () => {
  await UserLocation.deleteMany({});
  await mongoose.connection.close();
});
