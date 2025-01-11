let isScriptLoaded = false;
let isScriptLoading = false;
let callbacks: (() => void)[] = [];

export const loadGoogleMapsScript = (callback: () => void) => {
  if (isScriptLoaded) {
    callback();
    return;
  }

  callbacks.push(callback);

  if (isScriptLoading) {
    return;
  }

  isScriptLoading = true;

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
  script.async = true;
  script.defer = true;
  script.onload = () => {
    isScriptLoaded = true;
    isScriptLoading = false;
    callbacks.forEach((cb) => cb());
    callbacks = [];
  };
  document.head.appendChild(script);
};
