import { 
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
  } from "react-icons/fa";
  import { RiTwitterXFill } from "react-icons/ri";


export const navLinks = [
    { title: "Home", href: "/" },
    { title: "Work", href: "/works" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
];
  
export const socialLinks = [
    {
      title: "Instagram",
      url: "https://www.instagram.com/akiramediamarketing/",
      icon: FaInstagram,
    },
    {
      title: "Twitter",
      url: "https://x.com/media_akira",
      icon: RiTwitterXFill,
    },
    {
      title: "Linkedln",
      url: "https://www.linkedin.com/company/akira-media-marketing/",
      icon: FaLinkedinIn,
    },
]