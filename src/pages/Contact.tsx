
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Thank you for your message!", {
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        organization: "",
        inquiryType: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h1>
              <p className="text-lg mb-0 text-muted-foreground">
                Have questions about our digital literacy initiatives? We're here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="School or Institution Name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select 
                      value={formData.inquiryType} 
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger id="inquiryType">
                        <SelectValue placeholder="Select an inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="training">Training Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-muted-foreground">
                        123 Education Street<br />
                        Knowledge City, KS 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-muted-foreground">
                        General Inquiries: <a href="mailto:info@digilearn.org" className="text-primary hover:underline">info@digilearn.org</a><br />
                        Support: <a href="mailto:support@digilearn.org" className="text-primary hover:underline">support@digilearn.org</a><br />
                        Partnerships: <a href="mailto:partners@digilearn.org" className="text-primary hover:underline">partners@digilearn.org</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-muted-foreground">
                        Main Office: <a href="tel:+15551234567" className="text-primary hover:underline">+1 (555) 123-4567</a><br />
                        Support Hotline: <a href="tel:+15551234568" className="text-primary hover:underline">+1 (555) 123-4568</a><br />
                        Hours: Monday-Friday, 9AM-5PM EST
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="#" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-0 mb-16">
          <div className="container mx-auto px-4">
            <div className="border rounded-lg overflow-hidden h-[400px] bg-slate-100 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-medium">Interactive Map Placeholder</p>
                <p className="text-muted-foreground">123 Education Street, Knowledge City</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg">How can my school become a partner?</h3>
                  <p className="text-muted-foreground mt-2">
                    Schools interested in our digital literacy program can apply through our partnership form or contact 
                    our partnerships team directly. We evaluate applications based on need, readiness, and available resources.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg">Do you provide training for teachers?</h3>
                  <p className="text-muted-foreground mt-2">
                    Yes, teacher training is a core component of our program. We offer both in-person workshops and 
                    online training modules to ensure educators are confident in integrating technology into their curriculum.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg">How is the program funded?</h3>
                  <p className="text-muted-foreground mt-2">
                    Our initiatives are funded through a combination of government grants, corporate sponsorships, 
                    and private donations. We also work with technology partners who provide equipment at reduced costs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg">Can I volunteer with DigiLearn?</h3>
                  <p className="text-muted-foreground mt-2">
                    We welcome volunteers with expertise in education, technology, or program management. 
                    Please contact our team with your background and availability to discuss volunteer opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
