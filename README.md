# 🎬 ShowTime - Movie Ticket Booking System

![ShowTime Banner](https://i.imgur.com/YOUR_BANNER_IMAGE_HERE.jpg)

## 📋 Overview
**ShowTime** is a full-featured, production-ready movie ticket booking platform built with the MERN stack. This application allows users to browse movies, select seats, book tickets, and make payments seamlessly. Admins can manage shows, view bookings, and track revenue through a dedicated dashboard.

## ✨ Features

### 🎫 User Features
- ✅ Browse latest movies with real-time data from TMDB
- ✅ View movie details, cast, trailers, and showtimes
- ✅ Interactive seat selection with real-time availability
- ✅ Secure booking with Stripe payment integration
- ✅ Favorite movies system
- ✅ Booking history and management
- ✅ Email notifications for bookings and reminders
- ✅ Responsive design for all devices

### 👑 Admin Features
- 📊 Dashboard with analytics (revenue, bookings, users)
- 🎬 Add new movie shows with TMDB integration
- 📋 Manage all shows and bookings
- 👥 View user statistics
- 🔐 Role-based access control

### ⚙️ System Features
- 🔄 Automated seat release for unpaid bookings
- 📧 Automated email notifications (booking confirmations, reminders)
- 🕐 Background job processing with Inngest
- 🔐 Secure authentication with Clerk
- 💳 Secure payment processing with Stripe
- 🎥 Real movie data from TMDB API

## 🖼️ Screenshots

### Home Page
![Home Page](YOUR_HOME_SCREENSHOT_LINK_HERE)

### Movies Page
![Movies Page](YOUR_MOVIES_SCREENSHOT_LINK_HERE)

### Movie Details
![Movie Details](YOUR_MOVIE_DETAILS_SCREENSHOT_LINK_HERE)

### Seat Selection
![Seat Selection](YOUR_SEAT_SELECTION_SCREENSHOT_LINK_HERE)

### Booking Page
![Booking Page](YOUR_BOOKING_SCREENSHOT_LINK_HERE)

### Admin Dashboard
![Admin Dashboard](YOUR_ADMIN_DASHBOARD_SCREENSHOT_LINK_HERE)

### Admin - Add Shows
![Add Shows](YOUR_ADD_SHOWS_SCREENSHOT_LINK_HERE)

## 🛠️ Technology Stack

### Frontend
- **React** - UI Library
- **Tailwind CSS** - Styling Framework
- **React Router** - Navigation
- **Clerk** - Authentication
- **React Hot Toast** - Notifications
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Stripe** - Payment Processing
- **TMDB API** - Movie Database
- **Inngest** - Background Jobs
- **Nodemailer** - Email Service
- **Clerk** - Authentication

## 📁 Project Structure

```
showtime/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Global state management
│   │   ├── assets/        # Images and assets
│   │   ├── lib/           # Utility functions
│   │   └── App.jsx        # Main app component
│   │
│   └── package.json
│
└── server/                # Node.js Backend
    ├── controllers/       # Business logic
    ├── models/           # Database schemas
    ├── routes/           # API routes
    ├── middleware/       # Authentication middleware
    ├── configs/         # Configuration files
    ├── inngest/         # Background jobs
    └── server.js        # Server entry point
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Clerk account
- Stripe account
- TMDB API key

### Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file and add your credentials
cp .env.example .env

# Edit .env file with your keys
# MONGODB_URI=your_mongodb_uri
# CLERK_SECRET_KEY=your_clerk_secret_key
# TMDB_API_KEY=your_tmdb_api_key
# STRIPE_SECRET_KEY=your_stripe_secret_key
# etc...

# Start the server
npm run dev
```

### Frontend Setup
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file
# VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
# VITE_BASE_URL=http://localhost:3000
# VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
# VITE_CURRENCY=USD

# Start the development server
npm run dev
```

## 🔧 Environment Variables

### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
TMDB_API_KEY=your_tmdb_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
SMTP_USER=your_brevo_smtp_user
SMTP_PASS=your_brevo_smtp_password
SENDER_EMAIL=your_sender_email
```

### Frontend (.env)
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
VITE_CURRENCY=USD
```

## 📚 API Endpoints

### Show Routes
- `GET /api/show/all` - Get all shows
- `GET /api/show/:movieId` - Get specific show
- `GET /api/show/now-playing` - Get now playing movies (Admin)
- `POST /api/show/add` - Add new show (Admin)

### Booking Routes
- `POST /api/booking/create` - Create booking
- `GET /api/booking/seats/:showId` - Get occupied seats

### User Routes
- `GET /api/user/bookings` - Get user bookings
- `GET /api/user/favorites` - Get user favorites
- `POST /api/user/update-favorite` - Update favorites

### Admin Routes
- `GET /api/admin/is-admin` - Check admin status
- `GET /api/admin/dashboard` - Get dashboard data
- `GET /api/admin/all-shows` - Get all shows
- `GET /api/admin/all-bookings` - Get all bookings

## 🎯 Key Features Implementation

### Real-time Seat Availability
- Seats are marked as occupied instantly upon selection
- Automatic release after 10 minutes if payment not completed
- Real-time updates across all users

### Payment Integration
- Stripe Checkout for secure payments
- Webhook handling for payment verification
- Automated booking confirmation

### Email System
- Booking confirmation emails
- Payment reminder emails
- Show reminder emails (8 hours before)
- New show notification emails

### Background Jobs
- Automated seat cleanup
- Email scheduling
- User synchronization with Clerk

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👩‍💻 Developer

**Maliha Yasmin Mim**  
- Full Stack Developer  
- MERN Stack Specialist  
- Passionate about building scalable web applications  

📧 Email: your.email@example.com  
🔗 LinkedIn: [linkedin.com/in/malihayasminmim](https://linkedin.com/in/malihayasminmim)  
🐙 GitHub: [github.com/malihayasminmim](https://github.com/malihayasminmim)

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for movie data API
- [Clerk](https://clerk.com/) for authentication
- [Stripe](https://stripe.com/) for payment processing
- [Inngest](https://www.inngest.com/) for background jobs
- [Brevo](https://www.brevo.com/) for email service

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Backend (Railway/Render)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy the application

### Database (MongoDB Atlas)
1. Create a free cluster
2. Whitelist IP addresses
3. Get connection string

---

⭐ **If you found this project helpful, please give it a star!** ⭐

---

**Happy Coding!** 🎬🍿