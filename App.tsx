import React from "react";
import AppNavigation from "./src/navigation/navigation";

// Root component of the application
// Serves as the entry point and wraps the navigation system
const App = () => {
  return (
    // Render the navigation component which manages all routes and screens
    <AppNavigation />
  );
};

export default App;