import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp, Eye, ShoppingCart, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guestPostNiches, guestPosts } from '@/data/guestPostSites';

const SITE_URL = 'https://guestpostplatform.com';
const CANONICAL_URL = `${SITE_URL}/buy-guest-posts/`;

const marketplaceFaqs = [
  {
    question: 'How do I choose a relevant guest post website?',
    answer: 'Start with topical and audience relevance, then compare recent organic traffic, editorial activity, content quality and outbound-link patterns. DA and DR are third-party comparison metrics, not guarantees of rankings or placement quality.',
  },
  {
    question: 'Are the listed prices and metrics guaranteed?',
    answer: 'No. Publisher availability, editorial requirements, traffic estimates and pricing can change. We reconfirm the current terms before you approve an order.',
  },
  {
    question: 'Can I approve the publisher before content is written?',
    answer: 'Yes. You can review the domain, topic fit, available metrics and publishing requirements before content production begins.',
  },
  {
    question: 'Do guest posts guarantee higher Google rankings?',
    answer: 'No responsible provider can guarantee rankings. Results depend on relevance, content quality, competition, technical SEO and your overall backlink profile.',
  },
];

const getQualityRank = (overview = '') => {
  const normalized = overview.toLowerCase();
  let rank = 0;
  if (normalized.includes('excellent')) rank = 5;
  else if (normalized.includes('very good') || normalized.includes('high traffic')) rank = 4;
  else if (normalized.includes('good')) rank = 3;
  else if (normalized.includes('average')) rank = 2;
  else if (normalized.includes('fine')) rank = 1;

  if (normalized.includes('reputable')) rank += 0.5;
  if (normalized.includes('healthy')) rank += 0.25;
  return rank;
};

const getTrafficValue = (traffic = '') => {
  const normalized = String(traffic).trim().toLowerCase();
  const value = Number.parseFloat(normalized.replace(/[^\d.]/g, '')) || 0;
  if (normalized.includes('m')) return value * 1_000_000;
  if (normalized.includes('k')) return value * 1_000;
  return value;
};

const BuyGuestPostsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('All');
  const [sortBy, setSortBy] = useState('quality-high');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const itemsPerPage = 12;

  const niches = guestPostNiches;

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = guestPosts.filter((post) => {
      const normalizedSearch = searchQuery.trim().toLowerCase();
      const matchesNiche = selectedNiche === 'All' || post.tags.includes(selectedNiche);
      const matchesSearch = !normalizedSearch || [post.title, post.notes, ...post.tags]
        .join(' ')
        .toLowerCase()
        .includes(normalizedSearch);
      return matchesNiche && matchesSearch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'quality-high':
          return getQualityRank(b.qualityOverview) - getQualityRank(a.qualityOverview)
            || getTrafficValue(b.monthlyTraffic) - getTrafficValue(a.monthlyTraffic)
            || (b.da ?? 0) - (a.da ?? 0);
        case 'price-low':
          return (a.price ?? Number.POSITIVE_INFINITY) - (b.price ?? Number.POSITIVE_INFINITY);
        case 'price-high':
          return (b.price ?? Number.NEGATIVE_INFINITY) - (a.price ?? Number.NEGATIVE_INFINITY);
        case 'da-high':
          return (b.da ?? 0) - (a.da ?? 0);
        case 'da-low':
          return (a.da ?? 0) - (b.da ?? 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedNiche, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedPosts.length / itemsPerPage);
  const paginatedPosts = filteredAndSortedPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const featuredSites = useMemo(() => [...guestPosts]
    .sort((a, b) => getQualityRank(b.qualityOverview) - getQualityRank(a.qualityOverview)
      || getTrafficValue(b.monthlyTraffic) - getTrafficValue(a.monthlyTraffic)
      || (b.da ?? 0) - (a.da ?? 0))
    .slice(0, 12), []);

  const visiblePageNumbers = [...new Set([
    1,
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
    totalPages,
  ])].filter((page) => page >= 1 && page <= totalPages).sort((a, b) => a - b);

  const marketplaceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${CANONICAL_URL}#collection`,
        url: CANONICAL_URL,
        name: 'Guest Post Marketplace and Publisher Opportunities',
        description: 'Filter guest post publisher opportunities by category, authority metrics, estimated traffic and price.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: guestPosts.length,
          itemListOrder: 'https://schema.org/ItemListOrderDescending',
          itemListElement: featuredSites.map((site, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: { '@type': 'Thing', name: site.title },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Guest Post Marketplace', item: CANONICAL_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: marketplaceFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  const getWhatsAppUrl = (post) => {
    const message = [
      'Hi, I would like to request a guest post placement.',
      '',
      `Website: ${post.title}`,
      `Categories: ${post.tags.join(', ')}`,
      `DA: ${post.da ?? 'N/A'}`,
      `DR: ${post.dr ?? 'N/A'}`,
      `Monthly traffic: ${post.monthlyTraffic}`,
      `Listed price: ${post.price === null ? post.priceLabel : `$${post.price.toLocaleString()}`}`,
      '',
      'Please share availability and the publishing requirements.',
    ].join('\n');

    return `https://wa.me/923025820230?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <Helmet>
        <title>Buy Guest Posts | Vetted Publisher Marketplace</title>
        <meta name="description" content={`Compare ${guestPosts.length.toLocaleString()} guest post publisher opportunities by niche, DA, DR, estimated traffic, quality and price. Request a relevant, editorially reviewed placement.`} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Guest Post Marketplace | Vetted Publisher Opportunities" />
        <meta property="og:description" content="Search and compare relevant publisher opportunities by category, quality, authority metrics, traffic and price." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Guest Post Platform" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Guest Post Marketplace | Guest Post Platform" />
        <meta name="twitter:description" content="Filter publisher opportunities by relevance, quality, traffic and price." />
        <script type="application/ld+json">{JSON.stringify(marketplaceSchema)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-slate-50">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Buy Premium Guest Posts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Compare relevant publisher opportunities by topic, editorial quality, authority metrics, estimated traffic and price.
            </motion.p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by domain or category..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                />
              </div>

              {/* Niche Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={selectedNiche}
                  onChange={(e) => {
                    setSelectedNiche(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-slate-900"
                >
                  {niches.map((niche) => (
                    <option key={niche} value={niche}>{niche}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-slate-900"
                >
                  <option value="quality-high">Quality: Best First</option>
                  <option value="da-high">DA: High to Low</option>
                  <option value="da-low">DA: Low to High</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-600">
              Showing {paginatedPosts.length} of {filteredAndSortedPosts.length} results
            </div>
          </div>

          {/* Guest Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
                    <div className="flex flex-wrap justify-end gap-1">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-slate-600">Domain Authority</div>
                      <div className="text-2xl font-bold text-blue-600">DA {post.da ?? 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Domain Rating</div>
                      <div className="text-2xl font-bold text-purple-600">DR {post.dr ?? 'N/A'}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-slate-600 mb-1">Monthly Traffic</div>
                    <div className="text-lg font-semibold text-slate-900">{post.monthlyTraffic}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-slate-600 mb-2">Features:</div>
                    <ul className="space-y-1">
                      {post.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-700 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-slate-600">Price</div>
                        <div className="text-2xl font-bold text-slate-900">
                          {post.price === null ? post.priceLabel : `$${post.price.toFixed(2)}`}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => setSelectedPost(post)}
                        variant="outline"
                        className="flex-1"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button
                        asChild
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                      >
                        <a
                          href={getWhatsAppUrl(post)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Request a guest post on ${post.title} via WhatsApp`}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Request Post
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {visiblePageNumbers.map((page, index) => (
                <React.Fragment key={page}>
                  {index > 0 && page - visiblePageNumbers[index - 1] > 1 && (
                    <span className="px-1 text-slate-500" aria-hidden="true">…</span>
                  )}
                <Button
                  onClick={() => setCurrentPage(page)}
                  variant={currentPage === page ? 'default' : 'outline'}
                  className={currentPage === page ? 'bg-blue-600 text-white' : ''}
                  aria-label={`Go to results page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </Button>
                </React.Fragment>
              ))}

              <Button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                variant="outline"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </section>

        <section className="bg-white border-t border-slate-200 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">Publisher research before placement</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How to use this guest post marketplace</h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-600 leading-relaxed">
              <div className="space-y-4">
                <p>Choose a category that overlaps with the audience of your target page. A contextually relevant publication is normally more defensible than an unrelated site selected only because its DA or DR is high.</p>
                <p>Use traffic and authority metrics as comparison signals, then review the publication&apos;s recent articles, topic consistency, editorial standards and outbound links. Metrics are estimates and may change between reviews.</p>
              </div>
              <div className="space-y-4">
                <p>Before ordering, request confirmation of current availability, price, accepted topics, expected turnaround and link attributes. Publication remains subject to the publisher&apos;s editorial approval.</p>
                <p>We do not promise rankings, indexing dates or permanent control of third-party websites. A guest post should provide useful information to the publisher&apos;s readers and support a broader people-first SEO strategy.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-t border-slate-200 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Guest post marketplace FAQs</h2>
            <div className="space-y-4">
              {marketplaceFaqs.map((faq) => (
                <details key={faq.question} className="group bg-white border border-slate-200 rounded-xl p-5">
                  <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between gap-4">
                    {faq.question}<span className="text-blue-600 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-slate-600 leading-relaxed mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedPost && (
        <div className="fixed inset-0 z-[70] bg-slate-950/70 p-4 flex items-center justify-center" role="presentation" onClick={() => setSelectedPost(null)}>
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="publisher-details-title"
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-blue-600 mb-1">Publisher opportunity</p>
                <h2 id="publisher-details-title" className="text-2xl font-bold text-slate-900">{selectedPost.title}</h2>
              </div>
              <button type="button" onClick={() => setSelectedPost(null)} className="p-2 rounded-lg hover:bg-slate-100" aria-label="Close publisher details">
                <X className="w-5 h-5" />
              </button>
            </div>
            <dl className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                ['Categories', selectedPost.sourceCategory || selectedPost.tags.join(', ')],
                ['Region', selectedPost.region || 'Not provided'],
                ['Domain Authority', selectedPost.da ?? 'N/A'],
                ['Domain Rating', selectedPost.dr ?? 'N/A'],
                ['Estimated traffic', selectedPost.monthlyTraffic],
                ['Quality review', selectedPost.qualityOverview || 'Editorial review required'],
                ['Listed price', selectedPost.price === null ? selectedPost.priceLabel : `$${selectedPost.price.toFixed(2)}`],
              ].map(([label, value]) => (
                <div key={label} className="bg-slate-50 rounded-xl p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">{label}</dt>
                  <dd className="font-semibold text-slate-900">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">Availability, metrics, price, accepted topics, turnaround and link attributes must be reconfirmed before ordering. Publication is subject to editorial approval.</p>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
              <a href={getWhatsAppUrl(selectedPost)} target="_blank" rel="noopener noreferrer">
                Request current details on WhatsApp
              </a>
            </Button>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
};

export default BuyGuestPostsPage;
