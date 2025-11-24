import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { leadActions, leadFormFields, sampleLeads, filtersLibrary } from '../../../shared/mockData';
import { NeonButton } from '../components/NeonButton';
import { SectionCard } from '../components/SectionCard';

export default function LeadsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-midnight">
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 32 }}>
        <SectionCard title="Quick Actions" subtitle="Stay on top of Crescent 2024">
          <View className="flex-row flex-wrap gap-2">
            {leadActions.map(action => {
              const intent =
                action.intent === 'accent'
                  ? 'bg-neon-orange/80 text-black'
                  : action.intent === 'primary'
                    ? 'border border-neon-cyan text-neon-cyan'
                    : 'border border-white/15 text-white';
              return (
                <View key={action.id} className={`rounded-full px-4 py-2 ${intent}`}>
                  <Text className="text-[12px] font-semibold">{action.label}</Text>
                </View>
              );
            })}
          </View>
        </SectionCard>

        <SectionCard title="Filters" subtitle="Smarter segmentation">
          <View className="flex-row flex-wrap gap-2">
            {filtersLibrary.map(filter => (
              <View key={filter.id} className="rounded-full border border-white/15 px-3 py-1">
                <Text className="text-[11px] text-gray-200">{filter.label}</Text>
              </View>
            ))}
          </View>
        </SectionCard>

        <SectionCard title="Leads" subtitle="Top priority cards">
          {sampleLeads.map(lead => (
            <View key={lead.id} className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-base font-semibold text-white">{lead.name}</Text>
                  <Text className="text-[12px] text-gray-400">
                    {lead.campaign} • {lead.city}
                  </Text>
                </View>
                <Text className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase text-neon-cyan">{lead.status}</Text>
              </View>
              <Text className="mt-3 text-[12px] text-gray-400">
                Owner: {lead.owner} • Last activity {lead.lastActivity}
              </Text>
              <View className="mt-3 flex-row justify-end gap-2">
                <NeonButton variant="outline">Call</NeonButton>
                <NeonButton>WhatsApp</NeonButton>
              </View>
            </View>
          ))}
        </SectionCard>

        <SectionCard title="Lead Form" subtitle="Quick capture">
          <View className="space-y-3">
            {leadFormFields.map(field => (
              <View key={field}>
                <Text className="text-[11px] uppercase tracking-[2px] text-gray-500">{field}</Text>
                <TextInput
                  placeholder={`Enter ${field}`}
                  placeholderTextColor="#94A3B8"
                  className="mt-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
                />
              </View>
            ))}
          </View>
          <View className="mt-4 flex-row justify-end">
            <NeonButton>Save Lead</NeonButton>
          </View>
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
}

