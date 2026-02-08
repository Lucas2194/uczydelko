# 🚀 Instrukcja wdrożenia Uczydełko na Vercel (DARMOWO)

## Krok 1: Załóż konto Formspree (formularz kontaktowy)

1. Wejdź na **https://formspree.io**
2. Kliknij **"Get Started"** → załóż darmowe konto
3. Kliknij **"+ New Form"**
4. Wpisz nazwę np. "Uczydełko Kontakt"
5. Skopiuj **Form ID** (np. `xyzabcde`)
6. W pliku `frontend/src/App.js` znajdź linię:
   ```javascript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
7. Zamień `YOUR_FORM_ID` na swój ID:
   ```javascript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzabcde";
   ```

**Darmowy limit:** 50 wiadomości/miesiąc (wystarczy dla małego biznesu)

---

## Krok 2: Zapisz kod na GitHub

1. W Emergent kliknij **"Save to GitHub"**
2. Zaloguj się do GitHub (jeśli nie masz konta - załóż darmowe)
3. Wybierz nazwę repozytorium np. `uczydełko-landing`
4. Kliknij **"Save"**

---

## Krok 3: Wdróż na Vercel

1. Wejdź na **https://vercel.com**
2. Kliknij **"Sign Up"** → zaloguj przez GitHub
3. Kliknij **"Add New..."** → **"Project"**
4. Znajdź swoje repozytorium `uczydełko-landing` → kliknij **"Import"**
5. W ustawieniach projektu:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `yarn build`
   - **Output Directory:** `build`
6. Kliknij **"Deploy"**
7. Poczekaj 1-2 minuty ☕

**Gotowe!** Otrzymasz link np. `uczydełko-landing.vercel.app`

---

## Krok 4: Podłącz własną domenę (opcjonalnie)

1. W panelu Vercel → **"Settings"** → **"Domains"**
2. Wpisz swoją domenę np. `uczydełko.pl`
3. Dodaj rekordy DNS u dostawcy domeny:
   - **Typ A:** `76.76.21.21`
   - **Typ CNAME (dla www):** `cname.vercel-dns.com`
4. Poczekaj na propagację DNS (5-60 minut)

---

## Podsumowanie kosztów

| Element | Koszt |
|---------|-------|
| Hosting Vercel | **0 zł** |
| Formspree (50 msg/mies) | **0 zł** |
| Domena .pl (rok) | ~40 zł |
| **RAZEM** | **~40 zł/rok** |

vs Emergent: 50 kredytów × 12 mies = 600 kredytów/rok

---

## Przydatne linki

- Formspree: https://formspree.io
- Vercel: https://vercel.com
- GitHub: https://github.com

## Kontakt techniczny

Jeśli masz problemy z wdrożeniem, napisz w Emergent - pomogę! 🙂
