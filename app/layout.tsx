import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-100">
        {children}
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}
