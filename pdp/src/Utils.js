export const loadTailwindStyles = async () => {
    try {
      await __webpack_init_sharing__('default'); // Initialize shared scope
      const container = window.home; // Access the 'home' container
      console.log("container", container)
      if (!container) throw new Error("Home container not found");
      
      await container.init(__webpack_share_scopes__.default); // Initialize the container's shared dependencies
      const factory = await container.get('./TailwindStyles'); // Dynamically load the TailwindStyles module
      const Module = factory();
      // TailwindStyles module loaded successfully
      Module(); // Execute it (since it may be a function or object)
    } catch (error) {
      console.warn("Error loading Tailwind styles from Home:", error);
      // Gracefully handle the error (e.g., load local styles, show fallback, etc.)
    }
  };