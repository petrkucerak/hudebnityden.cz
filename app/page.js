import Card from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/hreader";

export default function Home() {
  return (
    <main className="w-full min-h-[100vh] flex flex-col items-center justify-between">
      <Header />
      <div>
        <Card
          title={"Hudební týden 2024"}
          description={`Srdečně zveme všechny hudebníky, zpěváky, herce a kreativce na VII. ročník Hudebního týdne! 🎨🎭🎼
            <br/>
Letošní Hudebňák bude o trochu více speciální! Vrcholem týdne bude totiž místo koncertu malý muzikál! ✨ S radostí uvítáme všechny (ne)hudební jedince, protože zapojit se může opravdu každý a přispět svojí troškou do společného díla. 🌿🤍`}
          image={`/assets/2024/ht_cover.png`}
          link2form={"https://forms.gle/A4U2KWqHd7SwAH9z8"}
        />
        <Card
          image={`/assets/2024/muzikal_cover.png`}
          title={"Malý muzikál MARNOTRATNÝ SYN"}
          description={`Srdečně zveme na první benefiční muzikál MARNOTRATNÝ SYN, který bude součástí uměleckého pásma na závěr Hudebního týdne 2024. Vše, co uvidíte, bude výsledkem týdenního úsilí účastníků. 🎵✨ Celým tímto dílem bychom rádi podpořili Majki Kašparovou, která se chystá na dobrovolnickou službu do Albánie (s organizací SADBA). 🌿
<br/>Začínáme od 16.00 v kostele sv. Matouše v Deštném v Orlických horách. Vstupné dobrovolné, bude použito na benefiční účel. 🤍`}
        />
      </div>
      <Footer />
    </main>
  );
}
