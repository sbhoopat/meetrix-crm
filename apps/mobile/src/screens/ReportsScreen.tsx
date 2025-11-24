import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { downloadableReports, leaderboardStats, reportSummaries } from '../../../shared/mockData';
import { NeonButton } from '../components/NeonButton';
import { SectionCard } from '../components/SectionCard';

export default function ReportsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-midnight">
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 32 }}>
        <SectionCard title="Reports" subtitle="KPI pulse">
          <View className="flex-row flex-wrap gap-3">
            {reportSummaries.map(report => (
              <View key={report.id} className="min-w-[150px] flex-1 rounded-2xl border border-white/10 bg-white/5 p-3">
                <Text className="text-[12px] text-gray-400">{report.label}</Text>
                <Text className="text-xl font-semibold text-white">{report.metric}</Text>
                <Text className="text-[11px] text-gray-500">{report.description}</Text>
              </View>
            ))}
          </View>
        </SectionCard>

        <SectionCard title="Leaderboard" subtitle="Call stack">
          {leaderboardStats.map(agent => (
            <View key={agent.id} className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Text className="text-base font-semibold text-white">{agent.agent}</Text>
              <Text className="text-[12px] text-gray-400">
                {agent.calls} calls • {agent.duration} avg • {agent.sales} sales
              </Text>
            </View>
          ))}
        </SectionCard>

        <SectionCard title="Download Center" subtitle="Instant exports">
          {downloadableReports.map(file => (
            <View key={file.id} className="mb-3 flex-row items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
              <View>
                <Text className="text-sm font-semibold text-white">{file.name}</Text>
                <Text className="text-[11px] text-gray-500">Updated {file.updated}</Text>
              </View>
              <NeonButton variant="outline">Download</NeonButton>
            </View>
          ))}
          <View className="mt-2 flex-row justify-end">
            <NeonButton>New Export</NeonButton>
          </View>
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
}

