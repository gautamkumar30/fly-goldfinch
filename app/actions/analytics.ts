'use server';

import { db } from '@/lib/db';
import { analyticsEvents, partialFormData } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';

export async function trackEvent(data: {
  sessionId: string;
  eventType: string;
  eventData: any;
  url: string;
}) {
  try {
    await db.insert(analyticsEvents).values({
      sessionId: data.sessionId,
      eventType: data.eventType,
      eventData: data.eventData,
      url: data.url,
    });
    return { success: true };
  } catch (error) {
    console.error('Error tracking event:', error);
    return { success: false };
  }
}

export async function savePartialFormData(data: {
  sessionId: string;
  formId: string;
  formData: any;
}) {
  try {
    // Check if partial data already exists for this session and form
    const existing = await db.query.partialFormData.findFirst({
      where: and(
        eq(partialFormData.sessionId, data.sessionId),
        eq(partialFormData.formId, data.formId)
      ),
    });

    if (existing) {
      await db.update(partialFormData)
        .set({ data: data.formData, updatedAt: new Date() })
        .where(eq(partialFormData.id, existing.id));
    } else {
      await db.insert(partialFormData).values({
        sessionId: data.sessionId,
        formId: data.formId,
        data: data.formData,
      });
    }
    return { success: true };
  } catch (error) {
    console.error('Error saving partial form data:', error);
    return { success: false };
  }
}

export async function getAnalyticsSummary() {
  try {
    const events = await db.query.analyticsEvents.findMany();
    
    // Total Metrics
    const totalPageViews = events.filter(e => e.eventType === 'page_view').length;
    const uniqueSessions = new Set(events.map(e => e.sessionId)).size;
    
    const timeSpentEvents = events.filter(e => e.eventType === 'time_spent');
    const avgTimeSpent = timeSpentEvents.length > 0 
      ? Math.round(timeSpentEvents.reduce((acc, e) => acc + (e.eventData as any).seconds, 0) / timeSpentEvents.length)
      : 0;

    // Daily Traffic
    const dailyTrafficMap = new Map<string, number>();
    events.filter(e => e.eventType === 'page_view').forEach(e => {
      const date = new Date(e.createdAt).toLocaleDateString();
      dailyTrafficMap.set(date, (dailyTrafficMap.get(date) || 0) + 1);
    });
    const dailyTraffic = Array.from(dailyTrafficMap.entries()).map(([date, count]) => ({ date, count }));

    // Scroll Depth Distribution
    const scrollDepthMap = { '25%': 0, '50%': 0, '75%': 0, '100%': 0 };
    events.filter(e => e.eventType === 'scroll_depth').forEach(e => {
      const depth = `${(e.eventData as any).depth}%`;
      if (depth in scrollDepthMap) {
        scrollDepthMap[depth as keyof typeof scrollDepthMap]++;
      }
    });
    const scrollDistribution = Object.entries(scrollDepthMap).map(([depth, count]) => ({ depth, count }));

    // Top Clicked Elements
    const clickMap = new Map<string, number>();
    events.filter(e => e.eventType === 'click').forEach(e => {
      const text = (e.eventData as any).text || 'Unknown';
      clickMap.set(text, (clickMap.get(text) || 0) + 1);
    });
    const topClicks = Array.from(clickMap.entries())
      .map(([text, count]) => ({ text, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return {
      totalPageViews,
      uniqueSessions,
      avgTimeSpent,
      dailyTraffic,
      scrollDistribution,
      topClicks
    };
  } catch (error) {
    console.error('Error fetching analytics summary:', error);
    throw new Error('Failed to fetch analytics summary');
  }
}
