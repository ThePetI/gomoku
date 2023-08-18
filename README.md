# Gomoku

Gomoku is an abstract strategy board game and is also called Five in a Row. It is traditionally played on a board with size 19x19.

## Installation

```bash
npm install
```

## Start

```bash
npm start
```

## Task

Böngészőben futtatható amőba játék írása, ahol ugyanabban a böngészőablakban fog játszani
mindkét játékos.

- A következőt szeretnénk látni:
  - egy login felületet, ahol a felhasználónak egy felhasználónév jelszó párossal
    kell belépnie (Nem szükséges a felhasználói adatokat tárolni sehol, beégetve megfelelő
    lesz.);
  - egy 10x10-es négyzethálót, kezdetben üresen;
  - egy feliratot, ami jelzi, hogy melyik játékos léphet következőnek, ez természetesen
    változzon minden lépés után;
  - a játékosok a már foglalt mezőkre ne tehessenek jelet, csak üres mezőre;
  - ha valamelyik játékos elérte az 5 egymás melletti jelet a játék érjen véget (ne engedjen
    több lépést) és írja ki a győztest;
  - gombnyomásra újra indítható legyen a játék az elejéről.
- Extra feladatok:
  - induláskor legyen megadható a pálya mérete (ne csak 10x10-es pályán legyen
    játszható);
  - lehessen kettőnél több játékos;
  - a játékosok neve kezdéskor megadható legyen;
  - a játékosok által használt jel kezdéskor megadható legyen;
  - az alkalmazás legyen PWA.
