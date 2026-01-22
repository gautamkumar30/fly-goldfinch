import { getAnalyticsSummary } from '@/app/actions/analytics';
import { StatsCard } from '@/components/admin/StatsCard';
import { AnalyticsCharts } from '@/components/admin/AnalyticsCharts';
import { BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default async function AdminAnalyticsPage() {
  const data = await getAnalyticsSummary();

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-gold mb-2">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Admin Dashboard</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
              Website <span className="text-linear-to-r from-gold to-gold/60 bg-clip-text text-transparent">Analytics</span>
            </h1>
            <p className="text-slate mt-2">
              Real-time insights into user behavior and engagement.
            </p>
          </div>
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white rounded-xl font-medium hover:bg-navy-secondary transition-colors"
          >
            Back to Website
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatsCard 
            title="Total Page Views"
            value={data.totalPageViews.toLocaleString()}
            iconName="eye"
            color="gold"
            description="Total views across all pages"
          />
          <StatsCard 
            title="Unique Sessions"
            value={data.uniqueSessions.toLocaleString()}
            iconName="users"
            color="navy"
            description="Distinct user sessions"
          />
          <StatsCard 
            title="Avg. Time Spent"
            value={`${data.avgTimeSpent}s`}
            iconName="clock"
            color="coral"
            description="Average duration per page"
          />
          <StatsCard 
            title="Total Interactions"
            value={data.topClicks.reduce((acc, c) => acc + c.count, 0).toLocaleString()}
            iconName="mouse-pointer"
            color="green"
            description="Total button & link clicks"
          />
        </div>

        {/* Charts Section */}
        <AnalyticsCharts 
          dailyTraffic={data.dailyTraffic}
          scrollDistribution={data.scrollDistribution}
          topClicks={data.topClicks}
        />

        {/* Footer Info */}
        <div className="mt-12 text-center text-slate text-sm">
          <p>© 2026 Fly Goldfinch. All analytics data is stored securely in Neon DB.</p>
        </div>
      </div>
    </div>
  );
}
