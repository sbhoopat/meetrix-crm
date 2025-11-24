import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dashboardMetrics, funnelSeries, leaderboardStats, whatsappTemplates } from '../../../shared/mockData';
import { NeonButton } from '../components/NeonButton';
import { SectionCard } from '../components/SectionCard';

const FunnelRow = ({ label, leads, conversions }: { label: string; leads: number; conversions: number }) => (
  <View className="flex-row items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
    <Text className="text-sm text-gray-300">{label}</Text>
    <View className="ml-4 flex-1">
      <View className="h-1.5 rounded-full bg-white/10">
        <View className="h-full rounded-full bg-neon-cyan" style={{ width: `${Math.min(100, (conversions / leads) * 100 + 10)}%` }} />
      </View>
      <Text className="mt-1 text-[11px] text-gray-500">
        {leads} leads • {conversions} conversions
      </Text>
    </View>
  </View>
);

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-midnight">
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 32 }}>
        <View className="mb-4 flex-row flex-wrap justify-between gap-3">
          {dashboardMetrics.map(metric => (
            <View key={metric.label} className="min-w-[150px] flex-1 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Text className="text-[11px] uppercase tracking-[2px] text-gray-400">{metric.label}</Text>
              <Text className="mt-1 text-2xl font-semibold text-white">{metric.value}</Text>
              {metric.trend && <Text className="mt-1 text-[11px] text-neon-cyan">{metric.trend}</Text>}
            </View>
          ))}
        </View>

        <SectionCard title="Conversion Funnel" subtitle="Weekly performance">
          <View className="mb-3 flex-row justify-end">
            <NeonButton variant="outline">Export</NeonButton>
          </View>
          <View className="space-y-3">
            {funnelSeries.map(item => (
              <FunnelRow key={item.name} label={item.name} leads={item.leads} conversions={item.conversions} />
            ))}
          </View>
        </SectionCard>

        <SectionCard title="Activity Feed" subtitle="Live WhatsApp nudges">
          {whatsappTemplates.map(template => (
            <View key={template.id} className="mb-3 rounded-2xl border border-white/5 bg-white/5 p-3">
              <Text className="text-sm font-semibold text-white">{template.title}</Text>
              <Text className="mt-1 text-[13px] text-gray-400">{template.preview}</Text>
              <View className="mt-2 flex-row justify-end">
                <NeonButton variant="outline">Send</NeonButton>
              </View>
            </View>
          ))}
        </SectionCard>

        <SectionCard title="Leaderboard" subtitle="Team highlights">
          <View className="space-y-3">
            {leaderboardStats.map(agent => (
              <View key={agent.id} className="flex-row items-center justify-between rounded-2xl border border-white/10 bg-slate/30 px-4 py-3">
                <View>
                  <Text className="text-sm font-semibold text-white">{agent.agent}</Text>
                  <Text className="text-[12px] text-gray-400">{agent.calls} calls • {agent.duration} avg</Text>
                </View>
                <NeonButton variant="outline">Ping</NeonButton>
              </View>
            ))}
          </View>
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
}

