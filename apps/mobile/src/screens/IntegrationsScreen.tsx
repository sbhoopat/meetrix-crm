import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { campaignProgress, integrationCards, whatsappTemplates } from '../../../shared/mockData';
import { NeonButton } from '../components/NeonButton';
import { SectionCard } from '../components/SectionCard';

export default function IntegrationsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-midnight">
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 32 }}>
        <SectionCard title="Active Integrations" subtitle="Connect every touchpoint">
          {integrationCards.map(integration => (
            <View key={integration.id} className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Text className="text-base font-semibold text-white">{integration.name}</Text>
              <Text className="text-[11px] uppercase tracking-[1px] text-gray-400">{integration.status}</Text>
              <Text className="mt-1 text-[12px] text-gray-400">{integration.description}</Text>
              <View className="mt-3 flex-row justify-end">
                <NeonButton variant={integration.status === 'Active' ? 'outline' : 'primary'}>
                  {integration.status === 'Active' ? 'Manage' : 'Activate'}
                </NeonButton>
              </View>
            </View>
          ))}
        </SectionCard>

        <SectionCard title="Campaign Boards" subtitle="At a glance">
          {campaignProgress.map(campaign => (
            <View key={campaign.id} className="mb-3 rounded-2xl border border-white/10 bg-slate/40 p-3">
              <Text className="text-sm font-semibold text-white">{campaign.title}</Text>
              <Text className="text-[11px] text-gray-400">Progress {campaign.progress}%</Text>
            </View>
          ))}
        </SectionCard>

        <SectionCard title="WhatsApp Business" subtitle="Template status">
          {whatsappTemplates.map(template => (
            <View key={template.id} className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-3">
              <Text className="text-sm font-semibold text-white">{template.title}</Text>
              <Text className="text-[12px] text-gray-400">{template.preview}</Text>
            </View>
          ))}
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
}

