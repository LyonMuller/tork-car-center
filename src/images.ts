/** Public image paths (respect Vite `base` for GitHub Pages). */
const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export const IMAGES = {
  heroWorkshop: asset('images/hero_workshop_1780023233615.png'),
  diagnosticEngine: asset('images/diagnostic_engine_1780023274732.png'),
  detailingService: asset('images/detailing_service_1780023254744.png'),
} as const;
