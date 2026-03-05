
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:bhushansonawane259@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: "Success!",
      description: "Opening your email client to complete the message.",
    });

    setTimeout(() => setIsSuccess(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light max-w-lg">
              Have a visionary project or an opportunity? I'm ready to help you build the next big thing.
            </p>

            <div className="space-y-8">
              <motion.a
                whileHover={{ x: 10 }}
                href="mailto:bhushansonawane259@gmail.com"
                className="flex items-center gap-6 group"
              >
                <div className="p-5 rounded-2xl glass border border-white/5 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Direct Email</p>
                  <p className="text-xl font-medium group-hover:text-primary transition-colors">bhushansonawane259@gmail.com</p>
                </div>
              </motion.a>

              <div className="flex gap-6 pt-8">
                {[
                  { icon: <Github />, href: "https://github.com", label: "GitHub" },
                  { icon: <Linkedin />, href: "https://linkedin.com", label: "LinkedIn" },
                ].map((social, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-14 h-14 rounded-2xl border-white/10 hover:bg-white/5 transition-all"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer" title={social.label}>
                        {social.icon}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="p-10 rounded-[2.5rem] border border-white/5 glass relative shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <Input
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all h-14 rounded-2xl px-6"
                  />
                </motion.div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <Input
                    name="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all h-14 rounded-2xl px-6"
                  />
                </motion.div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <Textarea
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="bg-white/5 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all min-h-[160px] resize-none rounded-2xl px-6 py-4"
                  />
                </motion.div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div key={isSuccess ? "success" : "idle"}>
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={cn(
                      "w-full h-14 font-bold rounded-2xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]",
                      isSuccess ? "bg-green-600 hover:bg-green-600 shadow-green-500/20" : "bg-primary hover:bg-primary/90 shadow-primary/20"
                    )}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : isSuccess ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6" /> Success!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </motion.div>
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
