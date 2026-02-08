# Uczydełko - Landing Page PRD

## Original Problem Statement
Jednostronicowy landing page dla marki edukacyjnej Uczydełko, prowadzonej przez Julię Plichtę, oferującej indywidualne i grupowe zajęcia edukacyjne dla dzieci w wieku przedszkolnym i wczesnoszkolnym na Kaszubach.

## User Persona
**Rodzice dzieci 4-10 lat** którzy:
- Martwią się o postępy szkolne dziecka
- Widzą trudności z koncentracją, czytaniem, pisaniem lub matematyką
- Szukają bezpiecznego, wspierającego miejsca bez presji
- Chcą indywidualnego podejścia

## Core Requirements (Static)
- [x] Hero Section z emocjonalnym nagłówkiem
- [x] Sekcja problemów rodziców (empatia)
- [x] Sekcja rozwiązania - metoda Uczydełko
- [x] Oferta zajęć (4 bloki)
- [x] O mnie - Julia Plichta
- [x] Jak wyglądają zajęcia
- [x] Opinie rodziców (placeholder)
- [x] Sekcja kontaktowa (formularz + przyciski)
- [x] Stopka z danymi kontaktowymi

## What's Been Implemented (2025-02-08)

### Frontend
- Responsywny landing page w React
- Animacje Framer Motion
- Paleta kolorów: żółty/pomarańczowy/błękitny (ciepła, przyjazna)
- Fonty: Fredoka (nagłówki), Outfit (body), Caveat (akcenty)
- Smooth scroll navigation
- Mobile menu
- Formularz kontaktowy z walidacją
- Przyciski: telefon, email, WhatsApp
- Zdjęcia stockowe dzieci podczas nauki

### Backend
- FastAPI endpoint `/api/contact` do zapisywania formularzy
- MongoDB storage dla wiadomości kontaktowych
- Endpoint `/api/contact` GET do pobierania wiadomości

### Sekcje Landing Page
1. **Hero** - "Twoje dziecko może więcej" + CTA
2. **Problemy** - 4 karty z wyzwaniami rodziców
3. **Rozwiązanie** - Metoda Uczydełko (multisensoryka, tempo, atmosfera)
4. **Oferta** - Matematyka, Pisanie/Czytanie, Siłownia pamięci, Zajęcia wyrównawcze
5. **O mnie** - Julia Plichta z Kaszub
6. **Jak to działa** - 3 kroki (kontakt → diagnoza → zajęcia)
7. **Opinie** - 3 placeholder testimonials
8. **Kontakt** - Formularz + przyciski bezpośrednie
9. **Stopka** - Dane kontaktowe

## Contact Information
- 📧 plichtajulia1@gmail.com
- 📞 516 760 656
- 📍 Kaszuby, Polska

## Prioritized Backlog

### P0 (Critical) - Done ✅
- Landing page z wszystkimi sekcjami
- Formularz kontaktowy
- Responsywność mobile

### P1 (Should Have)
- Prawdziwe zdjęcie Julii Plichty (obecnie placeholder)
- Prawdziwe opinie rodziców
- SEO meta tags
- Google Analytics

### P2 (Nice to Have)
- Integracja z Google Calendar do rezerwacji
- Cennik zajęć
- Blog/artykuły edukacyjne
- Integracja z Mailchimp/newsletter

## Next Action Items
1. Zastąp placeholder zdjęcie Julii prawdziwym zdjęciem
2. Dodaj prawdziwe opinie rodziców
3. Rozważ dodanie cennika zajęć
4. Dodaj SEO meta tags dla lepszej widoczności w Google

## Darmowy Hosting (2025-02-08)
Projekt przygotowany do darmowego hostingu na Vercel:
- Formularz kontaktowy zmieniony na Formspree (darmowe 50 wiadomości/mies)
- Usunięta zależność od backendu
- Instrukcja wdrożenia: `/app/DEPLOY_VERCEL_INSTRUKCJA.md`

**Koszt:** ~40 zł/rok (tylko domena) vs 600 kredytów/rok na Emergent
