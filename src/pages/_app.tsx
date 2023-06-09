import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { Toaster } from "react-hot-toast";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
