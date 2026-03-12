import { VerticalConfig } from '../vertical.config';

const rss: VerticalConfig = {
  id: 'yur-rss-poller',
  name: 'YUR RSS Poller',
  tagline: 'Headless Feed Intelligence — Aggregate, Classify, Alert',
  icon: '📡',
  primaryColor: '#E65100',
  accentColor: '#FF9100',
  bgGradient: 'linear-gradient(135deg, #0A0A0A 0%, #E65100 50%, #FF9100 100%)',
  systemInstruction: `You are YUR RSS Poller, a headless AI-powered feed aggregation and content intelligence system. You poll RSS, Atom, and JSON feeds at configurable intervals, classify incoming content by topic, sentiment, and relevance, fire alerts on matching criteria, and build automated digests. You handle feed discovery, format normalization, deduplication, and dead feed detection. You turn the firehose of web content into curated, actionable intelligence.`,
  complianceStandards: [
    'RSS 2.0 / Atom 1.0 Specification Compliance',
    'Copyright & Fair Use (Content Excerpting)',
    'GDPR (Personal Data in Feeds)',
    'Rate Limiting & Polling Etiquette',
    'Content Attribution Requirements'
  ],
  agents: [
    {
      name: 'FEED_AGGREGATOR',
      role: 'Feed Discovery, Polling & Normalization Agent',
      systemPrompt: 'You discover, subscribe to, and poll RSS/Atom/JSON feeds. Normalize heterogeneous feed formats into a unified schema. Handle feed authentication, conditional GETs (ETag/If-Modified-Since), and graceful degradation for malformed feeds. Detect dead feeds, manage polling intervals based on update frequency, and deduplicate entries across feeds.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'CONTENT_CLASSIFIER',
      role: 'Content Classification & Topic Tagging Agent',
      systemPrompt: 'You classify feed items by topic, industry, sentiment, urgency, and relevance to configured interest profiles. Apply multi-label taxonomy, extract named entities (companies, people, products), and score content quality. Build topic models from feed history to improve classification over time.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 12288
    },
    {
      name: 'ALERT_ENGINE',
      role: 'Alert Rules & Notification Dispatch Agent',
      systemPrompt: 'You evaluate incoming feed items against configurable alert rules — keyword matches, topic triggers, sentiment shifts, source priority, and breaking news patterns. Dispatch alerts via webhook, email, Slack, or push notification with configurable deduplication windows and escalation rules. Manage alert fatigue through intelligent throttling and bundling.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'DIGEST_BUILDER',
      role: 'Automated Digest & Summary Generation Agent',
      systemPrompt: 'You compile periodic digests from aggregated feed content — daily briefings, weekly roundups, and topic-specific newsletters. Summarize key articles, rank by importance, group by theme, and generate executive-level overviews. Support customizable digest templates and recipient-specific content filtering.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 12288
    }
  ],
  dataSources: [
    {
      name: 'Feed Registry',
      type: 'database',
      description: 'Subscribed feeds — URLs, formats, polling intervals, health status, and last poll timestamps'
    },
    {
      name: 'Content Store',
      type: 'database',
      description: 'Aggregated feed items — full text, metadata, classifications, and deduplication hashes'
    },
    {
      name: 'Alert Rules Engine',
      type: 'file',
      description: 'Alert rule definitions — keyword lists, topic triggers, source priorities, and notification targets'
    },
    {
      name: 'Feed Discovery',
      type: 'api',
      description: 'Feed discovery via site parsing, OPML imports, and feed directory lookups'
    }
  ],
  outputFormats: [
    'Real-Time Alert Notifications',
    'Daily/Weekly Digest Emails',
    'Topic-Classified Feed Dashboards',
    'Feed Health Reports',
    'Content Trend Analytics',
    'Named Entity Extraction Reports',
    'OPML Export Files',
    'Digest Newsletter Templates'
  ],
  defaultModel: 'CORE_FAST',
  features: {
    videoGen: false,
    tts: false,
    imageGen: false,
    maps: false,
    search: true,
    governance: false,
    stripe: false
  }
};

export default rss;
