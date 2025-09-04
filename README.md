<<<<<<< HEAD
# Step used to Create my First Mobile App using react native

1. I created a directory (prodev-mobile-app-0x00). 
    * I entered into it (cd prodev-mobile-app-0x00)
    * i Initialized a new Expo project using the latest Expo Router template:
      (npx create-expo-app@latest .) note: the directory should be empty so not overwrite thing or maybe the command might fall back.
2. *  I Started the Expo development server with: npx expo start
      (note:the default home page is in app/(tabs)/index.tsx). NOTE: It might prompt a print: 
      Need to install the following packages:
      expo@53.0.20
      Ok to proceed? (y): type 'y' and hit enter. (This prompt is just telling you that expo isn’t installed globally yet, so it’s going to install version 53.0.20 locally to run the command. That’s totally normal when using npx.). (NOTE: If it did not work on powershell, use bash terminal).
    * It printed a QR code which i scand with my phone by opening expo go app, clicked on scan with android (note: For iOS Devices: Scan the QR code in the terminal using your phone’s Camera app.). Then I scanned it and it connected.
    * To see some changes, i change the welcome! in app/(tabs)/index.txs to  ** First App Created**
3. move the default appilication to an isolated folder (instead of deleting it for learning sake): npm run reset-project
    * If it prompts; Do you want to move existing files to /app-example instead of deleting them? (Y/n): typte 'y' and enter

## Bonus: 
* always save you work (ctr + s / cmd s) to see changes.
* To render on web, do: npx expo start --web
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
>>>>>>> master
