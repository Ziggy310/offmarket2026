import { useState } from "react";
import { Phone, MapPin, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inquiryTypes = ["General Inquiry", "Table Reservation", "Food Truck Enquiry", "Event Partnership", "Private Event"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", type: inquiryTypes[0] });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-6xl md:text-8xl text-foreground text-center mb-4">CONTACT</h1>
          <p className="font-body text-lg text-muted-foreground text-center mb-12">We'd love to hear from you.</p>

          {submitted ? (
            <div className="bg-card border border-primary/30 rounded-lg p-12 text-center">
              <h2 className="font-display text-3xl text-primary mb-2">THANK YOU!</h2>
              <p className="font-body text-muted-foreground">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="font-body text-sm text-foreground">Name *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="font-body text-sm text-foreground">Email *</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="font-body text-sm text-foreground">Phone (optional)</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="font-body text-sm text-foreground">I'm interested in</label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors">
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="font-body text-sm text-foreground">Message *</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors resize-none" />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="bg-primary text-primary-foreground font-display text-xl tracking-wider px-10 py-3 rounded-full hover:bg-primary/90 transition-all w-full md:w-auto">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          )}

          {/* Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              <p className="font-body text-sm text-muted-foreground">N125 395, 8125-017 Quarteira</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-primary" />
              <a href="tel:+351937208678" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">+351 937 208 678</a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Instagram className="w-6 h-6 text-primary" />
              <a href="https://www.instagram.com/offmarketn125/reels/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">@offmarketn125</a>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-lg overflow-hidden h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.5!2d-8.1!3d37.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA0JzEyLjAiTiA4wrAwNicwMC4wIlc!5e0!3m2!1sen!2spt!4v1709000000000"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Off Market location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
