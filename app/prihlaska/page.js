import Cover from "@/components/cover";
import Footer from "@/components/footer";
import Header from "@/components/hreader";

export default function Prihlaska() {
  return (
    <div>
      <Header />
      <Cover />
      <iframe
        width="100%"
        height="800px"
        src="https://docs.google.com/forms/d/e/1FAIpQLScKI9D3y1rPg8vpogWQK3H6S95gIsHF7MSlbuBQlet5R0PoYg/viewform?embedded=true"
        className="h-[2600px]"
      ></iframe>
      <Footer />
    </div>
  );
}
