import { useEffect } from 'react';

const SEO = ({ 
  title = "Lekki Brothers Club - Premier Social Organization in Lagos, Nigeria",
  description = "Join Lekki Brothers Club, Lagos' premier social organization fostering brotherhood, community development, and networking opportunities. Discover our events, leadership, and community impact.",
  image = "https://www.lekkibrothers.com.ng/hero-image.jpeg",
  url = "https://www.lekkibrothers.com.ng/"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogImage) ogImage.setAttribute('content', image);
    if (ogUrl) ogUrl.setAttribute('content', url);
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    if (twitterImage) twitterImage.setAttribute('content', image);
    if (twitterUrl) twitterUrl.setAttribute('content', url);
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }
  }, [title, description, image, url]);

  return null;
};

export default SEO;