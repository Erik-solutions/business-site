import { SideLinks } from "./SideLinks";
import type {Links} from "./SideLinks";
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaGithub } from "react-icons/fa";

export const socialLinks: Links[] = [
    {
      name: "Facebook ",
      link: "https://www.facebook.com/profile.php?id=61556188773300",
      icon: <FaFacebookF  />,
    },
    {
      name: "Twitter",
      link: "https://x.com/TlotlisoEM",
      icon: <FaTwitter />,
    },
    {
      name: "Github",
      link: "https://github.com/Erik-solutions/",
      icon: <FaGithub/>,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/tlotliso-eric-makoboshane-81a623191?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaOqxcNbXThK8H1i1l0UpNA%3D%3D",
      icon: <FaLinkedinIn />,
    },
  ];


export const SideNav=()=>(
    <SideLinks icons={socialLinks} />
)