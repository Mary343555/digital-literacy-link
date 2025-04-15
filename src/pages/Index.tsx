
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Laptop, Users, GraduationCap, BarChart, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const features = [
  {
    title: "Digital Literacy Curriculum",
    description: "Comprehensive, age-appropriate resources to build essential digital skills.",
    icon: BookOpen,
  },
  {
    title: "Device Management",
    description: "Efficient distribution and maintenance of educational technology hardware.",
    icon: Laptop,
  },
  {
    title: "Tutor Training",
    description: "Professional development for educators to effectively integrate technology.",
    icon: GraduationCap,
  },
  {
    title: "Internet Connectivity",
    description: "Solutions for reliable internet access in educational environments.",
    icon: Wifi,
  },
  {
    title: "Student Engagement",
    description: "Interactive platforms that enhance participation and learning outcomes.",
    icon: Users,
  },
  {
    title: "Impact Assessment",
    description: "Data-driven evaluation of educational outcomes and digital literacy progress.",
    icon: BarChart,
  },
];

const testimonials = [
  {
    quote: "The digital literacy program has transformed how our students engage with technology. They're not just consuming content but creating it!",
    author: "Sarah Johnson",
    title: "Principal, Eastside School",
  },
  {
    quote: "As a teacher with limited tech experience, the training provided was invaluable. I now confidently integrate digital tools in my classroom.",
    author: "Michael Rodriguez",
    title: "Science Teacher, Central High",
  },
  {
    quote: "The curriculum resources are exceptional - they've made complex digital concepts accessible to our rural students with varying levels of prior exposure.",
    author: "Emily Chang",
    title: "District Educational Technology Coordinator",
  },
];

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-white">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Enhancing Educational Outcomes Through Digital Literacy</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Empowering students and educators with technology resources, training, and support for a digitally inclusive future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/about">Learn More</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/dashboard">Access Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">2,800+</p>
                <p className="text-sm text-muted-foreground mt-2">Devices Distributed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">57</p>
                <p className="text-sm text-muted-foreground mt-2">Partner Schools</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">180+</p>
                <p className="text-sm text-muted-foreground mt-2">Trained Tutors</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">12K+</p>
                <p className="text-sm text-muted-foreground mt-2">Students Impacted</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Digital Learning Solutions</h2>
              <p className="text-muted-foreground">
                Our integrated approach addresses all aspects of digital literacy in educational environments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-hover bg-card rounded-lg p-6 border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to enhance digital literacy?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join our mission to bridge the digital divide and prepare students for success in an increasingly digital world.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">What Educators Are Saying</h2>
              <p className="text-muted-foreground">
                Hear from teachers and administrators who have implemented our digital literacy solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-border shadow-sm">
                  <div className="mb-4 text-2xl text-primary">"</div>
                  <p className="mb-6 text-muted-foreground">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
