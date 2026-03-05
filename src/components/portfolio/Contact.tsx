
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset success state after a while
    setTimeout(() => setIsSuccess(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:contact@bhushansonawane.com"
                className="flex items-center gap-4 group hover:text-primary transition-colors"
              >
                <div className="p-4 rounded-xl glass border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Me</p>
                  <p className="text-lg font-medium">contact@bhushansonawane.com</p>
                </div>
              </a>

              <div className="flex gap-4 pt-6">
                {[
                  { icon: <Github />, href: "https://github.com", label: "GitHub" },
                  { icon: <Linkedin />, href: "https://linkedin.com", label: "LinkedIn" },
                ].map((social, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full border-white/10 hover:bg-white/5"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" title={social.label}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/10 glass"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                <Input
                  required
                  placeholder="John Doe"
                  className="bg-white/5 border-white/10 focus:border-primary transition-all h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white/5 border-white/10 focus:border-primary transition-all h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                <Textarea
                  required
                  placeholder="How can I help you?"
                  className="bg-white/5 border-white/10 focus:border-primary transition-all min-h-[150px] resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full h-12 font-bold rounded-xl transition-all ${
                  isSuccess ? "bg-green-600 hover:bg-green-600" : "bg-primary hover:bg-primary/90"
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : isSuccess ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Message Sent
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
