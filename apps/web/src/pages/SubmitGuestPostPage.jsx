import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSeo from '@/components/PageSeo';

const SubmitGuestPostPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    blogName: '',
    niche: '',
    da: '',
    pa: '',
    monthlyTraffic: '',
    pricing: '',
    contentGuidelines: '',
    contactEmail: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const niches = [
    'Technology',
    'Finance',
    'Health',
    'E-commerce',
    'Marketing',
    'Travel',
    'Lifestyle',
    'Business',
    'Education',
    'Food & Cooking',
    'Fashion',
    'Sports',
    'Entertainment',
    'Real Estate',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.blogName || !formData.niche || !formData.da || !formData.contactEmail) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contactEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    const message = encodeURIComponent(`Publisher application\nWebsite: ${formData.blogName}\nNiche: ${formData.niche}\nDA: ${formData.da}\nPA: ${formData.pa || 'Not provided'}\nMonthly traffic: ${formData.monthlyTraffic || 'Not provided'}\nPrice: ${formData.pricing || 'Not provided'}\nGuidelines: ${formData.contentGuidelines || 'Not provided'}\nContact email: ${formData.contactEmail}`);
    window.open(`https://wa.me/923025820230?text=${message}`, '_blank', 'noopener,noreferrer');

    // Show success message
    setSubmitted(true);
    toast({
      title: "Submission Successful!",
      description: "WhatsApp has opened with your application. Please send the prepared message to complete submission.",
    });

    // Reset form
    setFormData({
      blogName: '',
      niche: '',
      da: '',
      pa: '',
      monthlyTraffic: '',
      pricing: '',
      contentGuidelines: '',
      contactEmail: '',
    });

    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageSeo
        title="Submit Your Website | Publisher Partnership Application"
        description="Apply to list your website as a publisher opportunity. Share your niche, audience, traffic and editorial requirements for manual review."
        path="/submit-guest-post"
      />

      <Header />

      <div className="min-h-screen bg-slate-50">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Submit Your Guest Post Opportunity
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Join our network of high-quality publishers and monetize your blog with guest posting opportunities
            </motion.p>
          </div>
        </section>

        <section className="bg-white border-b border-slate-200 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-5">Apply as a real editorial publisher</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Guest Post Platform is a marketplace for matching advertisers and agencies with independent publishers. An application is a request for review, not an automatic listing. Please provide accurate website, niche, traffic, pricing and contact information so we can understand the audience and publishing terms before presenting any opportunity to a buyer.</p>
            <p className="text-slate-700 leading-relaxed mb-4">Quality review considers original content, topical focus, recent publishing activity, visible ownership, search visibility and the pattern of existing outbound links. We may ask for analytics evidence or editorial guidelines. Publishers always retain the right to edit or reject an article, request disclosure and decide which link attributes are appropriate.</p>
            <p className="text-slate-700 leading-relaxed">Submitting the form opens WhatsApp with your details; press send there to complete the application. Do not include passwords or private analytics access. Acceptance, order volume and earnings are not guaranteed, and inaccurate metrics can lead to removal from the marketplace.</p>
            <p className="text-slate-700 leading-relaxed mt-4">Before applying, make sure your public contact information and recent articles are accessible without a login. State whether you accept new articles, contextual edits or both, and disclose restricted topics, turnaround time and revision rules. Clear terms reduce unsuitable enquiries and help both parties approve work without avoidable delays.</p>
          </div>
        </section>

        {/* Form Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Submission Received!</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Thank you for submitting your guest posting opportunity. Our team will review your submission and contact you within 2-3 business days.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Blog Information</h2>
                  <p className="text-slate-600 mb-6">
                    Tell us about your blog and guest posting opportunity
                  </p>
                </div>

                {/* Blog Name */}
                <div>
                  <label htmlFor="blogName" className="block text-sm font-semibold text-slate-900 mb-2">
                    Blog Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="blogName"
                    name="blogName"
                    value={formData.blogName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your blog name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                {/* Niche Category */}
                <div>
                  <label htmlFor="niche" className="block text-sm font-semibold text-slate-900 mb-2">
                    Niche Category <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="niche"
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-slate-900"
                  >
                    <option value="">Select a niche</option>
                    {niches.map((niche) => (
                      <option key={niche} value={niche}>
                        {niche}
                      </option>
                    ))}
                  </select>
                </div>

                {/* DA and PA */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="da" className="block text-sm font-semibold text-slate-900 mb-2">
                      Domain Authority (DA) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      id="da"
                      name="da"
                      value={formData.da}
                      onChange={handleChange}
                      required
                      min="1"
                      max="100"
                      placeholder="e.g., 65"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="pa" className="block text-sm font-semibold text-slate-900 mb-2">
                      Page Authority (PA)
                    </label>
                    <input
                      type="number"
                      id="pa"
                      name="pa"
                      value={formData.pa}
                      onChange={handleChange}
                      min="1"
                      max="100"
                      placeholder="e.g., 58"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    />
                  </div>
                </div>

                {/* Monthly Traffic */}
                <div>
                  <label htmlFor="monthlyTraffic" className="block text-sm font-semibold text-slate-900 mb-2">
                    Monthly Traffic
                  </label>
                  <input
                    type="text"
                    id="monthlyTraffic"
                    name="monthlyTraffic"
                    value={formData.monthlyTraffic}
                    onChange={handleChange}
                    placeholder="e.g., 50,000 or 50K"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                {/* Pricing */}
                <div>
                  <label htmlFor="pricing" className="block text-sm font-semibold text-slate-900 mb-2">
                    Pricing per Guest Post
                  </label>
                  <input
                    type="text"
                    id="pricing"
                    name="pricing"
                    value={formData.pricing}
                    onChange={handleChange}
                    placeholder="e.g., $500 or negotiable"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                {/* Content Guidelines */}
                <div>
                  <label htmlFor="contentGuidelines" className="block text-sm font-semibold text-slate-900 mb-2">
                    Content Guidelines
                  </label>
                  <textarea
                    id="contentGuidelines"
                    name="contentGuidelines"
                    value={formData.contentGuidelines}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Describe your content requirements, word count, formatting preferences, etc."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-slate-900"
                  ></textarea>
                </div>

                {/* Contact Email */}
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-semibold text-slate-900 mb-2">
                    Contact Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Guest Post Opportunity
                  </Button>
                </div>

                <p className="text-sm text-slate-600 text-center">
                  By submitting this form, you agree to our terms and conditions. We'll review your submission and contact you within 2-3 business days.
                </p>
              </form>
            )}
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <article className="bg-white border border-slate-200 rounded-2xl p-7">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Publisher eligibility</h2>
              <p className="text-slate-600 leading-relaxed mb-4">We look for an active website with a clear editorial topic, original indexed articles, a real audience and transparent ownership or contact details. Authority metrics are reference points, not automatic approval.</p>
              <p className="text-slate-600 leading-relaxed">Sites built mainly to sell links, copied content, misleading traffic claims, malware, adult or illegal material, and unrelated mass publishing may be rejected.</p>
            </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-7">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What happens after you apply</h2>
              <p className="text-slate-600 leading-relaxed mb-4">The prepared application opens in WhatsApp; you must press send to complete it. We then review niche fit, visible content quality, estimated traffic patterns, publishing terms and link attributes.</p>
              <p className="text-slate-600 leading-relaxed">Listing is not guaranteed. Publishers retain final editorial control, and paid or sponsored links should use the disclosure attributes required by the publisher and applicable search-engine guidelines.</p>
            </article>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Why Join Our Network?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Monetize Your Blog</h4>
                <p className="text-slate-600 text-sm">
                  Earn revenue from quality guest posts on your website
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Quality Content</h4>
                <p className="text-slate-600 text-sm">
                  Receive well-written, relevant content for your audience
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Full Control</h4>
                <p className="text-slate-600 text-sm">
                  You decide what gets published on your blog
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default SubmitGuestPostPage;
