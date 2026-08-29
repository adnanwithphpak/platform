import rawSites from './guest-post-sites.tsv?raw';
import rawDrSites from './guest-post-sites-dr.tsv?raw';
import rawQualitySites from './guest-post-sites-quality.tsv?raw';

const CATEGORY_RULES = [
  ['Technology', /tech|software|code|program|digital|cyber|cloud|data|computer|mobile|gadget|apk|internet|ai(?:[^a-z]|$)|analytics|linux|web/i],
  ['Business', /business|entrepreneur|ceo|company|corporate|industry|success|leadership|management|commerce|market/i],
  ['Finance', /financ|money|wealth|invest|stock|trading|crypto|coin|bank|fund|economic|capital|broker|insurance/i],
  ['Health', /health|medical|medic|wellness|fitness|psych|care|healer|germ|yoga/i],
  ['Travel', /travel|tour|voyage|hotel|airline|destination|wander|trip|places|tourist/i],
  ['Home', /home|decor|interior|property|realty|house|garden|architect|construction|building|living/i],
  ['Sports', /sport|football|soccer|hockey|racing|speedway|running|athletic|cricket|golf|league/i],
  ['Education', /educ|study|school|academy|learn|grammar|english|student|knowledge|university|exam|quiz/i],
  ['Entertainment', /entertain|celebr|fame|movie|music|magazine|gossip|anime|manga|lyrics|poetry|joke|pun|bio/i],
  ['News', /news|daily|journal|report|press|times|today|weekly|media|herald|tribune|wire/i],
  ['Food', /food|recipe|menu|restaurant|cook|kitchen|snack|yummy/i],
  ['Fashion', /fashion|style|beauty|apparel|luxe|vanity/i],
  ['Gaming', /game|gaming|gamer|blooket|robux|play|esport/i],
  ['Marketing', /marketing|seo|social|brand|content|outreach|advertis/i],
  ['Lifestyle', /lifestyle|family|parent|mom|relationship|wedding|wish|inspir/i],
  ['Energy', /energy|oil|gas|solar|renewable/i],
  ['Automotive', /automotive|vehicle|motor| car |racing/i],
  ['Legal', /legal|lawyer| law |attorney/i],
  ['Environment', /environment|ecology|green|sustainab/i],
  ['Art & Design', /art|design|creative|craft|architecture/i],
  ['Real Estate', /real estate|realty|property|realtor/i],
];

const parseMetric = (value) => {
  const parsed = Number.parseFloat(String(value).replace(/[^\d.]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
};

const parseOptionalMetric = (value) => {
  if (!String(value).trim()) return null;
  return parseMetric(value);
};

const getTags = (domain, notes) => {
  const searchable = `${domain} ${notes}`;
  const tags = CATEGORY_RULES
    .filter(([, pattern]) => pattern.test(searchable))
    .map(([category]) => category);

  return tags.length ? [...new Set(tags)] : ['General'];
};

const parseSites = (rawData, includesDa) => rawData
  .split(/\r?\n/)
  .slice(1)
  .map((line) => {
    const columns = line.split('\t').map((value) => value.trim());
    if (columns.length < (includesDa ? 5 : 4)) return null;

    const domainMatch = columns[0].match(/(?:www\.)?[a-z0-9][a-z0-9.-]+\.[a-z]{2,}/i);
    if (!domainMatch) return null;

    const domain = domainMatch[0].replace(/^www\./i, '').toLowerCase();
    const notes = columns[0].replace(domainMatch[0], '').trim();
    const hasConfirmedPrice = /confirm/i.test(columns[columns.length - 1]);
    const da = includesDa || hasConfirmedPrice ? parseOptionalMetric(columns[1]) : null;
    const dr = parseOptionalMetric(columns[includesDa || hasConfirmedPrice ? 2 : 1]);
    const monthlyTraffic = hasConfirmedPrice
      ? 'Not provided'
      : columns[includesDa ? 3 : 2] || 'Not provided';
    const parsedPrice = Number.parseFloat(columns[columns.length - 1]);
    const price = Number.isFinite(parsedPrice) ? Math.round(parsedPrice * 100) / 100 : null;

    if (!domain || (price === null && !hasConfirmedPrice)) return null;

    const tags = getTags(domain, notes);
    return {
      id: domain,
      title: domain,
      niche: tags[0],
      tags,
      da,
      dr,
      monthlyTraffic,
      price,
      priceLabel: price === null ? 'Confirm on WhatsApp' : null,
      notes,
      features: [...tags.slice(0, 2), 'Editorial review', 'Placement terms disclosed'],
    };
  })
  .filter(Boolean);

const allSites = [
  ...parseSites(rawSites, true),
  ...parseSites(rawDrSites, false),
  ...rawQualitySites
    .split(/\r?\n/)
    .slice(1)
    .map((line) => {
      const columns = line.split('\t').map((value) => value.trim());
      if (columns.length < 7) return null;

      const domainMatch = columns[0].match(/(?:www\.)?[a-z0-9][a-z0-9.-]+\.[a-z]{2,}/i);
      if (!domainMatch) return null;

      const domain = domainMatch[0].replace(/^www\./i, '').toLowerCase();
      const category = columns[6] || 'General';
      const qualityOverview = columns[5] || '';
      const tags = getTags(domain, category);
      const price = parseOptionalMetric(columns[4]);

      return {
        id: domain,
        title: domain,
        niche: tags[0],
        tags,
        da: parseOptionalMetric(columns[1]),
        dr: null,
        monthlyTraffic: columns[2] || 'Not provided',
        price,
        priceLabel: price === null ? 'Confirm on WhatsApp' : null,
        notes: category,
        region: columns[3] && columns[3] !== '-' ? columns[3] : null,
        qualityOverview,
        sourceCategory: category,
        features: [category, qualityOverview, 'Placement terms disclosed'].filter(Boolean),
      };
    })
    .filter(Boolean),
];

const sitesByDomain = allSites.reduce((sites, site) => {
  const existing = sites.get(site.title);
  if (!existing) {
    sites.set(site.title, site);
    return sites;
  }

  const tags = [...new Set([...existing.tags, ...site.tags])];
  sites.set(site.title, {
    ...existing,
    ...site,
    da: site.da ?? existing.da,
    dr: site.dr ?? existing.dr,
    monthlyTraffic: site.monthlyTraffic === 'Not provided'
      ? existing.monthlyTraffic
      : site.monthlyTraffic,
    price: site.price ?? existing.price,
    priceLabel: site.price === null && existing.price === null
      ? site.priceLabel
      : existing.priceLabel,
    region: site.region ?? existing.region,
    qualityOverview: site.qualityOverview ?? existing.qualityOverview,
    sourceCategory: site.sourceCategory ?? existing.sourceCategory,
    notes: site.notes || existing.notes,
    niche: tags[0],
    tags,
    features: site.qualityOverview
      ? [site.sourceCategory, site.qualityOverview, 'Placement terms disclosed'].filter(Boolean)
      : [...tags.slice(0, 2), 'Editorial review', 'Placement terms disclosed'],
  });
  return sites;
}, new Map());

export const guestPosts = [...sitesByDomain.values()];

export const guestPostNiches = [
  'All',
  ...CATEGORY_RULES.map(([category]) => category).filter((category) =>
    guestPosts.some((site) => site.tags.includes(category))
  ),
  'General',
];
