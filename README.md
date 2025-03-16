# CV Application

The CV Application is a React-based web tool designed to help users create a polished CV/résumé. Users can input their personal details, educational history, and work experience through an intuitive interface. This project showcases fundamental React principles, including component-based design, state management, and props handling, making it an excellent example of modern front-end development.

## Features
- **General Information**: Add your name, email, and phone number.
- **Educational Experience**: Enter details such as school name, study title, and dates attended.
- **Practical Experience**: Provide company name, job title, key responsibilities, and employment dates.
- **Interactive Functionality**:
  - **Submit**: Save and display your input as a static CV.
  - **Edit**: Modify previously submitted data with pre-filled input fields.

## Technology Stack
- **React**: For building dynamic user interfaces.
- **Vite**: For fast development and optimized builds.
- **JavaScript (ES6+)**: For application logic and interactivity.
- **CSS**: For custom styling and responsive layouts.
- **Git/GitHub**: For version control and collaboration.

## Project Structure
CV-Application/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── PersonalInfo.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   └── ...             # Additional components
│   ├── styles/            # CSS styling files
│   │   ├── App.css
│   │   └── ...            # Component-specific styles
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Vite entry point
│   └── index.html         # Root HTML file
├── .gitignore             # Files ignored by Git
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation


## Setup Instructions

### Prerequisites
- **Node.js**: Version 16 or higher (check with `node -v`).
- **Git**: Installed for cloning the repository.

### Installation
1. **Clone the Repository**:

   git clone https://github.com/your-username/CV-Application.git

   cd CV-Application

2. **Install Dependencies**:

    npm install

2. **Run the Development Server**:

    npm run dev

Access the app at http://localhost:5173 (or the assigned port).
