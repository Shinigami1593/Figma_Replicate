import Image from "next/image";

const partners = [
  { name: "Cloud Education", src: "/images/cloud-education.png" },
  { name: "CMC", src: "/images/cmc.png" },
  { name: "SNP", src: "/images/snp.png" },
  { name: "Zebec", src: "/images/zebec.png" },
];

export default function PartnersRow() {
  return (
    <section className="partners-row" aria-labelledby="partners-title">
      <p id="partners-title">Our Partners</p>
      <div className="partner-logos">
        {partners.map((partner) => (
          <div className="partner-logo" key={partner.name}>
            <Image
              src={partner.src}
              alt={partner.name}
              width={176}
              height={90}
              sizes="(max-width: 600px) 72px, 100px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}