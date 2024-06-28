import Footer from "@/components/footer";
import Header from "@/components/hreader";

export default function Home() {
  return (
    <main className="w-full min-h-[100vh] flex flex-col items-center justify-between">
      <Header />
      <Footer />
    </main>
  );
}
