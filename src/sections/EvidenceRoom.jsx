import { useState } from "react";

const evidenceItems = [
  {
    id: "apa-2015",
    authors: "American Psychological Association",
    year: "2015",
    title: "Guidelines for Psychological Practice With Transgender and Gender Nonconforming People",
    source: "American Psychologist, 70(9), 832-864",
    url: "https://pubmed.ncbi.nlm.nih.gov/26653312/"
  },
  {
    id: "olson-2016",
    authors: "Olson, K. R., Durwood, L., DeMeules, M., & McLaughlin, K. A.",
    year: "2016",
    title: "Mental Health of Transgender Children Who Are Supported in Their Identities",
    source: "Pediatrics, 137(3), e20153223",
    url: "https://publications.aap.org/pediatrics/article/137/3/e20153223/81409/Mental-Health-of-Transgender-Children-Who-Are"
  },
  {
    id: "russell-2016",
    authors: "Russell, S. T., & Fish, J. N.",
    year: "2016",
    title: "Sexual Minority Youth, Social Change, and Health: A Developmental Perspective",
    source: "Journal of Research on Adolescence, 26(4), 631-642",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4937661/"
  },
  {
    id: "diamond-1997",
    authors: "Diamond, M., & Sigmundson, H. K.",
    year: "1997",
    title: "Sex Reassignment at Birth: Long-Term Review and Clinical Implications",
    source: "Archives of Pediatrics & Adolescent Medicine, 151(3), 298-304",
    url: "https://pubmed.ncbi.nlm.nih.gov/9080940/"
  },
  {
    id: "kaltiala-2023",
    authors: "Kaltiala, R., & Wierenga, T.",
    year: "2023",
    title: "Mental Health of Transgender and Gender Diverse Youth",
    source: "Annual Review of Clinical Psychology, 19, 233-256",
    url: "https://www.annualreviews.org/content/journals/10.1146/annurev-clinpsy-072220-020326"
  }
];

export default function EvidenceRoom() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="evidence-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? "▾" : "▸"} 延伸阅读
      </button>
      {open && (
        <div className="evidence-panel">
          <p className="evidence-heading">延伸阅读</p>
          <ul className="evidence-list">
            {evidenceItems.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <strong>{item.authors}</strong> ({item.year}).{" "}
                  {item.title}. <em>{item.source}</em>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
