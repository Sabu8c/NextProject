import Boxes from "@/components/Boxes";
import Hero from "@/components/Hero";
import Image from "next/image";

const boxItems = [
  {
    title: 'Montage PC',
    icon: '/apple.svg',
    subtitle: 'Gaming, burautique ou station de travail',
    link: '#',
    linkKey: 'Commander un PC',
  },
  {
    title: 'Réparation de PC',
    icon: '/apple.svg',
    subtitle: 'Défectueux, perte de puissance',
    link: '#',
    linkKey: 'Demander un devis',
  },
  {
    title: 'Amélioration de PC',
    icon: '/apple.svg',
    subtitle: 'Performances ou Design',
    link: '#',
    linkKey: 'Demander un devis',
  },
  {
    title: 'Mise à niveau de windows',
    icon: '/apple.svg',
    subtitle: 'Vers Windows 10 ou 11',
    link: '#',
    linkKey: 'Nous contacter',
  },
];

export default function Home() {
  return (
    <>
      <section className="h-[100vh]"></section>
    </>
  );
}
