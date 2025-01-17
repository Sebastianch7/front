// src/reportWebVitals.ts
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

// Función que recibe las métricas de rendimiento
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);  // Cargar y medir el CLS
    onFID(onPerfEntry);  // Cargar y medir el FID
    onFCP(onPerfEntry);  // Cargar y medir el FCP
    onLCP(onPerfEntry);  // Cargar y medir el LCP
    onTTFB(onPerfEntry); // Cargar y medir el TTFB
  }
};

export default reportWebVitals;
