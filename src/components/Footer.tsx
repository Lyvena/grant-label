import { ExternalLink, Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
          <Copyright className="h-4 w-4" />
          <a
            href="https://lyvena.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 flex items-center"
          >
            Lyvena
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
          <span>. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;