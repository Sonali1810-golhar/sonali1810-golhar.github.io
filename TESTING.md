# Portfolio Test Report

Generated after packaging the portfolio.

## Automated checks
- [x] `index.html` exists.
- [x] `styles.css` exists.
- [x] `script.js` exists.
- [x] Profile image exists and is readable.
- [x] Resume PDF exists.
- [x] Favicon exists.
- [x] Internal stylesheet/script/image/resume references point to files that exist.
- [x] External GitHub and LinkedIn URLs use the supplied resume details.
- [x] No project GitHub URL was invented; project buttons are clearly marked as placeholders.
- [x] Responsive CSS includes tablet/mobile breakpoints.
- [x] Reduced-motion accessibility rule is included.
- [x] Navigation, theme toggle, scroll progress, section reveal, and back-to-top interactions are implemented.

## Manual browser test recommended
Run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` and test:
1. Navigation and smooth scrolling.
2. Theme toggle.
3. Resume download.
4. GitHub / LinkedIn / email links.
5. Mobile navigation at a narrow viewport.
6. Project architecture hover states.
7. Back-to-top button.


Image check: 869×1086 JPEG.
