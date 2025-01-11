// components/requests/styles.ts
export const getTripTypeColor = (
  tripType: string,
  isDarkTheme: boolean,
): string => {
  switch (tripType) {
    case "oneWay":
      return isDarkTheme ? "#00BCD4" : "#0097A7";
    case "roundTrip":
      return isDarkTheme ? "#FFA500" : "#FF8C00";
    case "waitReturn":
      return isDarkTheme ? "#9C27B0" : "#7B1FA2";
    case "discharge":
      return isDarkTheme ? "#4CAF50" : "#000000";
    default:
      return isDarkTheme ? "#ffffff" : "#000000";
  }
};

export const getServiceTypeColor = (
  serviceType: string,
  isDarkTheme: boolean,
): string => {
  switch (serviceType) {
    case "wheelchair":
      return isDarkTheme ? "#FF5722" : "#E64A19";
    case "stretcher":
      return isDarkTheme ? "#E91E63" : "#C2185B";
    case "ambulatory":
      return isDarkTheme ? "#00BCD4" : "#0097A7";
    case "airport":
      return isDarkTheme ? "#4CAF50" : "#388E3C";
    default:
      return isDarkTheme ? "#ffffff" : "#000000";
  }
};
