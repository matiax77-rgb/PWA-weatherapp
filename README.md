# Aplikacja pogodowa PWA

Aplikacja pogodowa napisana w Angular, z obsługą trybu PWA (Progressive Web App). Pozwala na sprawdzanie pogody, zapisywanie ulubionych miast oraz instalację na urządzeniu.

## Funkcje
- Sprawdzanie pogody na podstawie lokalizacji lub nazwy miasta
- Zapisywanie wybranych miast
- Praca offline (PWA)
- Instalacja na urządzeniu (Add to Home Screen)
- Tryb ciemny

## Struktura projektu
```
angular.json
karma.conf.js
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
src/
  index.html
  main.ts
  polyfills.ts
  styles.css
  app/
    app-routing.module.ts
    app.component.css
    app.component.html
    app.component.spec.ts
    app.component.ts
    app.module.ts
    ApiResponse/
      clouds.ts
      coord.ts
      main.ts
      root.ts
      sys.ts
      weather.ts
      wind.ts
    header/
      header.component.css
      header.component.html
      header.component.spec.ts
      header.component.ts
    Result/
      weather.ts
    saved-weather/
      saved-city-weather.component.css
      saved-city-weather.component.html
      saved-city-weather.component.ts
      saved-weather.component.css
      saved-weather.component.html
      saved-weather.component.ts
    Service/
      weatherapi.service.spec.ts
      weatherapi.service.ts
    weather-body/
      save-confirm-dialog.component.ts
      weather-body.component.css
      weather-body.component.html
      weather-body.component.spec.ts
      weather-body.component.ts
  environments/
    environment.prod.ts
    environment.ts
public/
  manifest.webmanifest
  icons/
    icon-72x72.png
    icon-96x96.png
    icon-128x128.png
    icon-144x144.png
    icon-152x152.png
    icon-192x192.png
    icon-384x384.png
    icon-512x512.png
```

## Uruchomienie projektu

1. Instalacja zależności:
   ```
   npm install
   ```
2. Uruchomienie w trybie deweloperskim:
   ```
   npm start
   ```
3. Budowanie wersji produkcyjnej:
   ```
   npx ng build --configuration=production
   ```
4. Uruchomienie serwera produkcyjnego (np. na porcie 3001 z obsługą routingu Angulara):
   ```
   npx http-server ./dist/angular-weather-app/browser -p 3001 -a 0.0.0.0 -c-1 --fallback index.html
   ```

## Instalacja jako PWA

1. Otwórz aplikację w przeglądarce (np. Chrome, Edge).
2. Kliknij ikonę instalacji w pasku adresu lub wybierz "Dodaj do ekranu głównego".
3. Aplikacja będzie działać offline i jak natywna.


