import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
            <CardDescription>Get in touch with the AI-PGF team</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-500" />
              <a 
                href="mailto:info@lyvena.xyz"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                info@lyvena.xyz
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            <p className="text-gray-600">
              We welcome inquiries about our grant programs and are happy to assist with any questions you may have about the application process.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;