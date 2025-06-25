module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Figma dosyasındaki temel renkler
        darkBackground: '#0F172A',      // Çok koyu arka plan (gece modu ana zemin)
        darkPrimary: '#2563EB',         // Ana mavi (buton, link vs.)
        darkSecondary: '#64748B',       // Orta gri, alt metinler
        lightBackground: '#F9FAFB',     // Açık mod arka plan (gerekirse)
        lightPrimary: '#2563EB',        // Açık mod ana mavi (aynı kalabilir)
        lightSecondary: '#4B5563',      // Açık mod orta gri
        accent: '#F59E0B',              // Sarı vurgular (buton hover, link)
        error: '#EF4444',               // Hata kırmızısı
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
