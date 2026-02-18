import { toast } from "sonner";

const baseConfig = {
  position: "top-center",
  duration: 2000,
};

export const showError = (message) => {
  toast.error(message, {
    ...baseConfig,
    style: {
      border: "1px solid #ef4444",
      padding: "16px",
      color: "#fff",
      background: "#b91c1c",
    },
    iconTheme: {
      primary: "#fff",
      secondary: "#b91c1c",
    },
  });
};

export const showSuccess = (message) => {
  toast.success(message, {
    ...baseConfig,
    style: {
      border: "1px solid #22c55e",
      padding: "16px",
      color: "#fff",
      background: "#15803d",
    },
  });
};

export const showWarning = (message) => {
  toast(message, {
    ...baseConfig,
    icon: "⚠️",
    style: {
      border: "1px solid #f59e0b",
      padding: "16px",
      background: "#b45309",
      color: "#fff",
    },
  });
};

export const showUpdated = (message) => {
  toast(message, {
    ...baseConfig,
    icon: "✏️",
    style: {
      border: "1px solid #22c55e",
      padding: "16px",
      color: "#fff",
      background: "#15803d",
    },
  });
};
