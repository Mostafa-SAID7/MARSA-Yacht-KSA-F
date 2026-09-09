# Setup Guide

## System Requirements

- **Node.js**: 20.x or higher
- **npm**: 10.x or higher
- **Operating System**: Windows, macOS, or Linux
- **Browser**: Modern browser with ES2022 support (Chrome, Firefox, Safari, Edge)

## Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Mostafa-SAID7/MARSA-Yacht-KSA-F.git
cd MARSA-Angular-Experience
```

### 2. Install Dependencies
```bash
cd marsa
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at [http://localhost:4200](http://localhost:4200)

### 4. Verify Setup
- Open browser to `http://localhost:4200`
- Check browser console for any errors
- Application should load without issues

## IDE Setup

### Visual Studio Code
Recommended extensions:
- **Angular Language Service**
- **TypeScript Vue Plugin (Volar)**
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**

### WebStorm / IntelliJ IDEA
- Angular support is built-in
- Enable Prettier as formatter

## Build & Deployment

### Development Build
```bash
npm run build
```
Output: `marsa/dist/public`

### Production Build
```bash
npm run build
```
Optimized production build ready for deployment.

### Type Checking
```bash
npm run typecheck
```
Run TypeScript compiler without emitting files.

## Environment Variables

Current configuration uses fixed settings:
- **Port**: 4200 (development)
- **Host**: localhost
- **Base Path**: /

To customize, modify `marsa/package.json` scripts.

## Troubleshooting

### Port Already in Use
If port 4200 is already in use, update the script in `package.json`:
```bash
ng serve --port 4300
```

### Module Not Found Errors
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Run type checker to identify issues:
```bash
npm run typecheck
```

### Build Failures
Check that you're using the correct Node.js version:
```bash
node --version  # Should be 20.x or higher
npm --version   # Should be 10.x or higher
```

## Next Steps

- Read [DEVELOPMENT.md](./DEVELOPMENT.md) for development guidelines
- Review [ARCHITECTURE.md](./ARCHITECTURE.md) for system design
- Check [../CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines
