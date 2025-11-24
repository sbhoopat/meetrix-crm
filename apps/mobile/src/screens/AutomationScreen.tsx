import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { automationFlows, schedulePresets, whatsappTemplates } from '../../../shared/mockData';
import { NeonButton } from '../components/NeonButton';
import { SectionCard } from '../components/SectionCard';

export default function AutomationScreen() {
  return (
    <SafeAreaView className="flex-1 bg-midnight">
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 32 }}>
        <SectionCard title="Workflows" subtitle="Low-code builder">
          {automationFlows.map(flow => (
            <View key={flow.id} className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-sm font-semibold text-white">{flow.name}</Text>
                  <Text className="text-[11px] uppercase tracking-[1px] text-gray-400">{flow.event}</Text>
                </View>
                <Text className="text-[11px] text-gray-500">Updated {flow.updated}</Text>
              </View>
              <View className="mt-3 flex-row justify-end gap-2">
                <NeonButton variant="outline">Edit</NeonButton>
                <NeonButton>Logs</NeonButton>
              </View>
            </View>
          ))}
          <View className="mt-2 flex-row justify-end">
            <NeonButton>Create Workflow</NeonButton>
          </View>
        </SectionCard>

        <SectionCard title="Schedules" subtitle="Trigger windows">
          <View className="flex-row flex-wrap gap-2">
            {schedulePresets.map(preset => (
              <View key={preset} className="rounded-full border border-white/15 px-3 py-1">
                <Text className="text-[11px] text-gray-100">{preset}</Text>
              </View>
            ))}
            <View className="rounded-full border border-neon-orange px-3 py-1">
              <Text className="text-[11px] text-neon-orange">Run now</Text>
            </View>
          </View>
        </SectionCard>

        <SectionCard title="WhatsApp Automation" subtitle="Template queue">
          {whatsappTemplates.map(template => (
            <View key={template.id} className="mb-3 rounded-2xl border border-white/10 bg-slate/40 p-3">
              <Text className="text-sm font-semibold text-white">{template.title}</Text>
              <Text className="mt-1 text-[12px] text-gray-400">{template.preview}</Text>
              <View className="mt-2 flex-row justify-end">
                <NeonButton variant="outline">Attach Flow</NeonButton>
              </View>
            </View>
          ))}
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
}

