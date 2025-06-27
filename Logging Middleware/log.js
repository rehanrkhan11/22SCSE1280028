// Logging Middleware/log.js

export const log = async (stack, level, pkg, message) => {
  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack: stack,        // "frontend"
        level: level,        // "error", "info", etc.
        package: pkg,        // "component", "page", etc.
        message: message,    // your message
      }),
    });
    const result = await response.json();
    console.log("Log result:", result);
  } catch (error) {
    console.error("Logging failed:", error);
  }
};



/*import { log } from "../utils/log";  // adjust relative path accordingly

log("frontend", "info", "component", "URL shortened successfully");
