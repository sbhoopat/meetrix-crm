import { MessageCircle, PhoneCall } from 'lucide-react';
import { whatsappTemplates } from '../../../shared/mockData';

export const WhatsApp = () => (
  <div className="space-y-6">
    <section className="glass-panel neon-border rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">WhatsApp Business</p>
          <p className="text-2xl font-semibold">Chat & template automation</p>
        </div>
        <button className="btn-outline">
          <PhoneCall size={16} className="mr-1 inline" /> Start call
        </button>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {whatsappTemplates.map(template => (
          <div key={template.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <MessageCircle size={16} /> {template.title}
            </div>
            <p className="mt-2 text-sm text-gray-400">{template.preview}</p>
            <button className="btn-neon btn-sm mt-3">Send template</button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

