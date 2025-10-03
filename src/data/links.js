import IconWhatsapp from "@/icons/IconWhatsapp.astro";
import IconMail from '@/icons/IconMail.astro';
import IconLinkedIn from '@/icons/IconLinkedin.astro';
import IconGithub from '@/icons/IconGithub.astro';

export const socialLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/+5255336703",
    icon: IconWhatsapp,
    ariaLabelKey: "whatsapp"
  },
  {
    name: "Email",
    url: "mailto:alejandro.canek.dev@gmail.com",
    icon: IconMail,
    ariaLabelKey: "email"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alejandro-canek",
    icon: IconLinkedIn,
    ariaLabelKey: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/sintaxist",
    icon: IconGithub,
    ariaLabelKey: "github"
  }
];

export const schedulingLink = "https://calendly.com/your-username";