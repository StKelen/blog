import Footer from "@/components/Footer";
import Aside from "@/components/Aside";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container">
        <Aside />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
