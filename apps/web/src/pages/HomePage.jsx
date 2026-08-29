import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Users, Link2, TrendingUp, Award, CheckCircle2, Search, ShieldCheck, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSeo from '@/components/PageSeo';
import { guestPosts } from '@/data/guestPostSites';

const HomePage = () => {
  const services = [
    {
      icon: FileText,
      title: 'Buy Guest Posts',
      description: 'Access premium guest posting opportunities on high-authority websites across various niches.',
      link: '/buy-guest-posts',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/images/guest-post-content-placement.webp',
      alt: 'Illustration of a quality-checked guest post article ready for publisher placement',
      caption: 'Review relevant publishing opportunities before selecting a placement.',
    },
    {
      icon: Users,
      title: 'Blogger Outreach',
      description: 'Connect with influential bloggers and secure quality backlinks through personalized outreach.',
      link: '/blogger-outreach',
      gradient: 'from-purple-500 to-pink-500',
      image: '/images/backlink-outreach-strategy.webp',
      alt: 'SEO professionals planning a backlink and blogger outreach campaign',
      caption: 'Manual outreach connects campaigns with relevant editorial websites.',
    },
    {
      icon: Link2,
      title: 'Link Insertion',
      description: 'Get your links inserted into existing high-quality content on authoritative websites.',
      link: '/link-insertion',
      gradient: 'from-orange-500 to-red-500',
      image: '/images/contextual-link-insertion.webp',
      alt: 'Illustration of contextual backlinks connecting relevant web pages across devices',
      caption: 'Contextual link insertion adds a useful citation to existing content.',
    },
  ];

  const stats = [
    { label: 'Publisher listings', value: guestPosts.length.toLocaleString(), icon: FileText },
    { label: 'Searchable categories', value: '15+', icon: Users },
    { label: 'Opportunity review', value: 'Manual', icon: TrendingUp },
    { label: 'Ranking guarantees', value: 'None', icon: Award },
  ];

  const verificationPoints = [
    {
      title: 'Publisher fit before writing',
      content: 'Review the proposed domain, topical category and available quality information before content production begins.',
    },
    {
      title: 'Publication-ready content',
      content: 'Content is planned around the publication’s audience and remains subject to its editorial requirements and approval.',
    },
    {
      title: 'Transparent live-link reporting',
      content: 'Reporting separates confirmed placement facts from changing third-party metrics and broader search-performance outcomes.',
    },
  ];

  const audiences = [
    {
      title: 'SEO agencies',
      content: 'Shortlist relevant publishers for client campaigns and use a managed workflow for content, coordination and live-link reporting.',
    },
    {
      title: 'SaaS and online brands',
      content: 'Build topical visibility around product, category and educational pages through publications that serve an aligned audience.',
    },
    {
      title: 'Consultants and website owners',
      content: 'Compare opportunities by niche, traffic, authority signals and budget without treating a single third-party metric as a guarantee.',
    },
  ];

  const processSteps = [
    {
      icon: Search,
      title: 'Define the campaign fit',
      content: 'Share your website, target page, topic, preferred market and budget so the search starts with relevance rather than link volume.',
    },
    {
      icon: BarChart3,
      title: 'Review publisher options',
      content: 'Compare topical category, estimated traffic, authority indicators, editorial quality and price before approving an opportunity.',
    },
    {
      icon: FileText,
      title: 'Prepare useful content',
      content: 'The article is written for the publisher’s readers, with a contextual reference that supports the subject instead of interrupting it.',
    },
    {
      icon: ShieldCheck,
      title: 'Coordinate and report',
      content: 'We manage publisher communication and share the live URL after publication. Search performance remains dependent on many factors.',
    },
  ];

  const faqs = [
    {
      question: 'How do I choose the right guest post website?',
      answer: 'Start with topical relevance and editorial quality, then review authority metrics, organic traffic patterns, audience fit and outbound-link behaviour. A high metric alone does not guarantee a useful placement.',
    },
    {
      question: 'Can I approve a publisher before my article is written?',
      answer: 'Yes. You can review suitable publisher opportunities before content production so the topic, target page and placement match your campaign requirements.',
    },
    {
      question: 'What is included with a guest post placement?',
      answer: 'The workflow can include publisher research, opportunity approval, original content, editorial coordination, publication and live-link reporting. Exact inclusions depend on the selected service.',
    },
    {
      question: 'What is the difference between a guest post and link insertion?',
      answer: 'A guest post publishes a new article, while a link insertion adds a relevant citation to a suitable existing article. The best option depends on context, editorial fit and campaign goals.',
    },
    {
      question: 'What does “high DA guest posts” mean?',
      answer: 'It commonly describes guest posts on websites with a comparatively strong third-party Domain Authority score. DA is not a Google metric, so we recommend checking relevance, organic visibility, editorial standards and link profile alongside it.',
    },
    {
      question: 'Does Guest Post Platform guarantee rankings or indexing?',
      answer: 'No. A legitimate provider cannot control Google rankings or guarantee when a URL will be indexed. We provide publisher research, outreach, content coordination and placement reporting without promising a specific search outcome.',
    },
    {
      question: 'Is Guest Post Platform a marketplace or a managed service?',
      answer: 'It supports both discovery and managed execution. You can browse publisher opportunities in the marketplace, then request help with selection, content, outreach and publication coordination.',
    },
    {
      question: 'Can agencies use the service for multiple client niches?',
      answer: 'Yes. Agencies can request publisher shortlists for different industries and campaigns. Availability, editorial rules and pricing vary by publisher, so each shortlist should be reviewed independently.',
    },
  ];

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://guestpostplatform.com/#guest-posting-service',
        name: 'Guest Post Platform and Blogger Outreach',
        serviceType: ['Guest posting service', 'Blogger outreach', 'Link insertion'],
        provider: { '@id': 'https://guestpostplatform.com/#organization' },
        url: 'https://guestpostplatform.com/',
        description: 'A guest post marketplace and managed outreach service for comparing relevant publisher opportunities and coordinating editorial placements.',
        audience: {
          '@type': 'Audience',
          audienceType: 'SEO agencies, brands, consultants and website owners',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://guestpostplatform.com/#faq',
        mainEntity: faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <PageSeo
        title="Guest Post Platform & Blogger Outreach | Guest Post Platform"
        description="Browse high DA guest post opportunities by niche, traffic and price, or request managed blogger outreach, content and transparent placement reporting."
        path="/"
        imageAlt="SEO growth illustration for guest post and link building campaigns"
        schema={homeSchema}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/marketplace-hero.webp"
            alt="Guest Post Platform marketplace and SEO growth illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Guest Post Platform for
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SEO Agencies &amp; Brands
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Browse niche-relevant publisher opportunities or use our managed blogger outreach service for research, content coordination and transparent placement reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/buy-guest-posts">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg px-8 py-6">
                  Browse Guest Posts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
                  Request Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6">
                <stat.icon className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive link building solutions tailored to your SEO goals
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link to={service.link} className="block group">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-slate-200 hover:border-blue-300">
                    <figure>
                      <img src={service.image} alt={service.alt} width="1800" height="1200" loading="lazy" decoding="async" className="w-full aspect-[3/2] object-cover" />
                      <figcaption className="px-8 pt-4 text-sm text-slate-500">{service.caption}</figcaption>
                    </figure>
                    <div className="p-8 pt-5">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marketplace Guidance Section */}
      <section className="py-24 bg-white" aria-labelledby="guest-post-marketplace-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
            <img
              src="/images/guest-post-seo-growth.webp"
              alt="SEO analytics and rocket illustration representing sustainable growth through guest posting"
              width="1800"
              height="900"
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] object-cover"
            />
            <figcaption className="px-6 py-4 text-sm text-slate-600">
              Relevant editorial placements support authority, referral discovery and long-term organic visibility.
            </figcaption>
          </figure>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Built for informed placement decisions</p>
            <h2 id="guest-post-marketplace-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              More Than a List of High-DA Websites
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              A professional <Link to="/buy-guest-posts" className="font-semibold text-blue-700 hover:underline">guest post marketplace</Link> should help you evaluate context—not simply sort sites by one number. The strongest opportunities align the publisher&apos;s subject, audience and editorial standards with the page you want to promote.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our workflow combines publisher research, site approval, original content and publication reporting. You keep visibility over the placement while our team coordinates the time-consuming outreach and editorial steps.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {['Topical and audience relevance', 'Traffic and authority signals', 'Editorial content quality', 'Clear placement reporting'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-5">
              <Link to="/buy-guest-posts" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">Explore guest post opportunities<ArrowRight className="ml-2 w-5 h-5" /></Link>
              <Link to="/pricing" className="inline-flex items-center font-semibold text-slate-700 hover:text-slate-950">Review pricing options<ArrowRight className="ml-2 w-5 h-5" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Audience and intent section */}
      <section className="py-24 bg-slate-50" aria-labelledby="high-da-guest-posts-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">High DA guest posts, evaluated in context</p>
            <h2 id="high-da-guest-posts-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              A Guest Posting Marketplace Built Around Relevance
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Guest Post Platform helps agencies and brands find guest posting opportunities and coordinate editorial outreach. The marketplace lets you compare available websites by niche, estimated traffic, authority indicators and price. If you need execution support, our managed service can cover publisher selection, original content and publication follow-up.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              “High DA” is a useful discovery phrase, but Domain Authority is a third-party metric—not a score used by Google. A sound decision also considers topical relevance, traffic history, content quality, audience alignment and the way a publisher handles external contributions. That broader review is the basis of our approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {audiences.map((audience) => (
              <article key={audience.title} className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">For {audience.title}</h3>
                <p className="text-slate-600 leading-relaxed">{audience.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-24 bg-white" aria-labelledby="outreach-process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">How the service works</p>
            <h2 id="outreach-process-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
              From Publisher Research to Live Placement
            </h2>
            <p className="text-xl text-slate-600">A clear workflow for marketplace orders, custom outreach and white-label agency campaigns.</p>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-700" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-bold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.content}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link to="/buy-guest-posts" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">Browse the publisher marketplace<ArrowRight className="ml-2 w-5 h-5" /></Link>
            <Link to="/blogger-outreach" className="inline-flex items-center font-semibold text-slate-700 hover:text-slate-950">Explore managed blogger outreach<ArrowRight className="ml-2 w-5 h-5" /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What You Can Verify
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-2xl mx-auto">
              Clear checkpoints make each publisher decision easier to review
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {verificationPoints.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-200">
                  <CheckCircle2 className="w-8 h-8 text-blue-600 mb-5" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{point.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand entity section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50" aria-labelledby="about-highda-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">About Guest Post Platform</p>
            <h2 id="about-highda-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Marketplace Choice With Managed Outreach Support</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Guest Post Platform is a guest post marketplace and outreach service for SEO agencies, consultants, brands and website owners. Our role is to make publisher discovery easier and help coordinate content-led placements when a campaign needs hands-on support.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We do not promise guaranteed rankings, guaranteed indexing or a fixed SEO outcome. Publisher availability, editorial acceptance and third-party metrics can change. Clients can review the proposed opportunity and choose the option that fits their topic, market and budget.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/about" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">Learn about Guest Post Platform<ArrowRight className="ml-2 w-5 h-5" /></Link>
              <Link to="/contact" className="inline-flex items-center font-semibold text-slate-700 hover:text-slate-950">Request a relevant shortlist<ArrowRight className="ml-2 w-5 h-5" /></Link>
            </div>
          </div>
          <aside className="rounded-2xl border border-blue-100 bg-white p-8 shadow-xl shadow-blue-900/5" aria-label="Publisher quality review checklist">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">What to check beyond DA</h3>
            <ul className="space-y-5">
              {[
                ['Niche and page relevance', 'Does the publisher serve an audience connected to your subject?'],
                ['Organic visibility', 'Does estimated traffic appear stable and supported by relevant content?'],
                ['Editorial standards', 'Are articles useful, attributable and written for readers?'],
                ['Link profile and placement', 'Will the reference sit naturally inside relevant editorial context?'],
                ['Price and campaign value', 'Does the opportunity fit your objective instead of merely offering a high score?'],
              ].map(([title, text]) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-blue-600" aria-hidden="true" />
                  <div><strong className="block text-slate-900">{title}</strong><span className="text-sm text-slate-600">{text}</span></div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-slate-50" aria-labelledby="home-faq-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Guest post marketplace FAQ</p>
            <h2 id="home-faq-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Questions Before You Choose a Placement</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Straightforward answers to help you compare guest posts, blogger outreach and contextual link insertion.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map(({ question, answer }) => (
              <article key={question} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{question}</h3>
                <p className="text-slate-600 leading-relaxed">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Guest Post Sites That Fit Your Niche?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Browse publisher opportunities or share your target page and campaign goals for a relevant shortlist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/buy-guest-posts">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6">
                  Browse Guest Post Sites
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
