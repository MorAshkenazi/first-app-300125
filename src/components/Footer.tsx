import { FunctionComponent } from "react";

interface FooterProps {
  dev: string;
  year: number;
}

const Footer: FunctionComponent<FooterProps> = ({ dev, year }) => {
  return (
    <div>
      {dev} {year} all rights reserved
    </div>
  );
};

export default Footer;
