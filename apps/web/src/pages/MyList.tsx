const listItems = [
  { title: 'Follow-up: Webinar signups', tasks: 5 },
  { title: 'Hot IELTS prospects', tasks: 12 },
  { title: 'Call later bucket', tasks: 8 }
];

export const MyList = () => (
  <div className="space-y-6">
    <section className="glass-panel neon-border rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">My List</p>
          <p className="text-2xl font-semibold">Build custom mini lists</p>
        </div>
        <button className="btn-neon">Add to list</button>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {listItems.map(item => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-sm text-gray-400">{item.tasks} entries</p>
            <button className="btn-outline btn-sm mt-3">View list</button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

