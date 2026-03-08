export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Akhil R',
    url: 'https://akhilr.web.app',
    image: 'https://akhilr.web.app/images/akhil.jpg',
    jobTitle: 'Cybersecurity & Backend Developer',
    description: 'Computer Science Student specializing in Cybersecurity, Backend Development, and Machine Learning',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Computer Science',
    },
    knowsAbout: [
      'Cybersecurity',
      'Backend Development',
      'Machine Learning',
      'Python',
      'Django',
      'Penetration Testing',
      'Web Security',
      'API Development',
    ],
    sameAs: [
      'https://github.com/Akhil-0911',
      'https://linkedin.com/in/akhil0911',
      'https://leetcode.com/Akhil_0911/',
    ],
  };

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2024-01-01T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: 'Akhil R',
      description: 'Cybersecurity & Backend Developer Portfolio',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Akhil R Portfolio',
    url: 'https://akhilr.web.app',
    description: 'Professional portfolio showcasing cybersecurity projects, backend development work, and machine learning applications',
    author: {
      '@type': 'Person',
      name: 'Akhil R',
    },
    inLanguage: 'en-US',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://akhilr.web.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://akhilr.web.app#projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'About',
        item: 'https://akhilr.web.app#about',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://akhilr.web.app#contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
