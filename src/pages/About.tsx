
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h1>
              <p className="text-lg mb-0 text-muted-foreground">
                Bridging the digital divide through accessible education and technology
              </p>
            </div>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  DigiLearn was established in 2020 in response to the growing digital divide in educational 
                  settings. We recognized that as technology became increasingly central to learning and career opportunities, 
                  many schools and communities lacked the resources, infrastructure, and expertise to provide adequate digital literacy education.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our founder, a former educator with experience in both urban and rural schools, witnessed firsthand the disparities 
                  in digital access and skills. With a background in educational technology and a passion for equity in education, 
                  they assembled a team of like-minded professionals to develop comprehensive solutions.
                </p>
                <p className="text-muted-foreground">
                  What began as a pilot program in 12 schools has now expanded to partnerships with 57 educational 
                  institutions across multiple districts, impacting over 12,000 students and training more than 180 educators.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80" 
                  alt="Students using laptops" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission and Values */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Approach & Values</h2>
              <p className="text-muted-foreground">
                We believe digital literacy is a fundamental right in the modern educational landscape. 
                Our work is guided by these core principles:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Equity & Access</h3>
                <p className="text-muted-foreground">
                  We prioritize reaching underserved communities and ensuring that digital literacy is accessible 
                  to all students regardless of socioeconomic status or geographic location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Educator Empowerment</h3>
                <p className="text-muted-foreground">
                  We believe in equipping teachers with the skills, confidence, and resources they need to 
                  effectively integrate technology into their teaching practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Sustainable Impact</h3>
                <p className="text-muted-foreground">
                  We design solutions that create lasting change through community ownership, ongoing 
                  support, and adaptable resources that evolve with technology.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-muted-foreground">
                Meet the dedicated professionals guiding our mission to enhance digital literacy in education.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">David Chen</h3>
                <p className="text-sm text-muted-foreground mb-2">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Former educator with 15+ years experience in educational technology integration.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="COO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Maya Jackson</h3>
                <p className="text-sm text-muted-foreground mb-2">Chief Operations Officer</p>
                <p className="text-sm text-muted-foreground">
                  Specializes in scaling educational initiatives across diverse communities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="CTO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Robert Patel</h3>
                <p className="text-sm text-muted-foreground mb-2">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground">
                  Technology innovator focused on creating accessible digital learning tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
              <p className="text-muted-foreground">
                We collaborate with educational institutions, government agencies, and technology companies 
                to create comprehensive digital literacy solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="bg-white p-6 rounded-lg w-full h-24 flex items-center justify-center border border-border">
                <span className="text-lg font-semibold text-muted-foreground">EdTech Foundation</span>
              </div>
              <div className="bg-white p-6 rounded-lg w-full h-24 flex items-center justify-center border border-border">
                <span className="text-lg font-semibold text-muted-foreground">Tech Corps</span>
              </div>
              <div className="bg-white p-6 rounded-lg w-full h-24 flex items-center justify-center border border-border">
                <span className="text-lg font-semibold text-muted-foreground">Global Learning</span>
              </div>
              <div className="bg-white p-6 rounded-lg w-full h-24 flex items-center justify-center border border-border">
                <span className="text-lg font-semibold text-muted-foreground">Connect Schools</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Whether you're an educator, technology partner, or supporter, 
              there are many ways to contribute to digital literacy education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
