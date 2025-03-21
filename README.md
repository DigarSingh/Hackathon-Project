# EcoImpact Frontend

Welcome to the EcoImpact frontend project! This application is designed to promote eco-friendly actions and initiatives through quizzes, rewards, and community engagement.

## Project Structure

The project is organized as follows:

```
eco-impact-frontend
├── public
│   └── favicon.svg          # Favicon for the application
├── src
│   ├── assets
│   │   └── styles
│   │       └── global.css   # Global styles for the application
│   ├── components
│   │   ├── common           # Common reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Navbar.jsx
│   │   ├── auth             # Authentication components
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   ├── quiz             # Quiz components
│   │   │   ├── QuestionCard.jsx
│   │   │   └── ResultsSummary.jsx
│   │   ├── rewards          # Rewards components
│   │   │   ├── RewardCard.jsx
│   │   │   └── RewardsList.jsx
│   │   ├── eco-actions      # Eco actions components
│   │   │   ├── ActionCard.jsx
│   │   │   └── ActionForm.jsx
│   │   └── initiatives      # Initiatives components
│   │       ├── InitiativeCard.jsx
│   │       └── InitiativesList.jsx
│   ├── context              # Context providers
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks                # Custom hooks
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   ├── pages                # Application pages
│   │   ├── Home.jsx
│   │   ├── Auth
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Quiz
│   │   │   ├── QuizList.jsx
│   │   │   └── QuizDetail.jsx
│   │   ├── Rewards
│   │   │   └── Rewards.jsx
│   │   ├── EcoActions
│   │   │   ├── ActionsList.jsx
│   │   │   └── ActionDetail.jsx
│   │   └── Initiatives
│   │       ├── InitiativesList.jsx
│   │       └── InitiativeDetail.jsx
│   ├── services             # API services
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── quizService.js
│   │   ├── rewardsService.js
│   │   ├── actionsService.js
│   │   └── initiativesService.js
│   ├── utils                # Utility functions
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Entry point of the application
├── .eslintrc.js             # ESLint configuration
├── .gitignore               # Git ignore file
├── index.html               # Main HTML file
├── package.json             # NPM configuration
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## Getting Started

To get started with the EcoImpact frontend project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd eco-impact-frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the application in action.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.