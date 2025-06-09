
import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto px-4">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Whether you're looking to hire a developer, collaborate on a project, 
                or just want to say hello, I'd love to hear from you. Feel free to 
                reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base break-all">indipa2002ayomal@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex-shrink-0">
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">GitHub</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base break-all">github.com/Indipa123 </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex-shrink-0">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">LinkedIn</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base break-all">linkedin.com/in/indipa-ayomal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                Send a Message
              </CardTitle>
            </CardHeader>
<CardContent className="p-4 sm:p-6 pt-0">
  <form
    onSubmit={async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("https://formspree.io/f/xgvyakyn", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon!",
          });
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } else {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive"
          });
        }
      } catch {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive"
        });
      }
    }}
    className="space-y-4 sm:space-y-6"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Name</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 text-sm sm:text-base"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 text-sm sm:text-base"
        />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Subject</Label>
      <Input
        id="subject"
        name="subject"
        required
        placeholder="Project inquiry, collaboration, etc."
        value={formData.subject}
        onChange={handleChange}
        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 text-sm sm:text-base"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Message</Label>
      <Textarea
        id="message"
        name="message"
        required
        placeholder="Tell me about your project or how I can help..."
        rows={4}
        value={formData.message}
        onChange={handleChange}
        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 text-sm sm:text-base resize-none"
      />
    </div>

    <Button 
      type="submit" 
      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm sm:text-base"
      size="lg"
    >
      <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
      Send Message
    </Button>
  </form>
</CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
